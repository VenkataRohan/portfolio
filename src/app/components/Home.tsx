"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { FaGithub, FaLinkedin, FaFileLines, FaEnvelope, FaChevronDown } from "react-icons/fa6";

const STAR_DEPTH = 20;
const STAR_HEAD_COLOR = new THREE.Color("#dbe8ff");
const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

// Thin tapered streak: bright at the head (+x), black at the tail (-x).
// With additive blending black is invisible, so the tail fades out cleanly.
const useStreakGeometry = () =>
  useMemo(() => {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const positions = geometry.attributes.position;
    const colors = new Float32Array(positions.count * 3);
    for (let i = 0; i < positions.count; i++) {
      const c = positions.getX(i) > 0 ? STAR_HEAD_COLOR : new THREE.Color(0, 0, 0);
      c.toArray(colors, i * 3);
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, []);

const ShootingStar = ({ initialDelay }: { initialDelay: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const geometry = useStreakGeometry();
  const star = useRef({
    active: false,
    wait: initialDelay,
    age: 0,
    life: 1,
    velocity: new THREE.Vector2(),
  });

  useFrame((state, delta) => {
    const group = groupRef.current;
    const material = materialRef.current;
    if (!group || !material) return;
    const s = star.current;

    if (!s.active) {
      s.wait -= delta;
      if (s.wait > 0) return;

      // Spawn somewhere in the upper/right part of the view, heading down-left
      const camera = state.camera as THREE.PerspectiveCamera;
      const halfH = STAR_DEPTH * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const halfW = halfH * camera.aspect;
      const angle = THREE.MathUtils.degToRad(randomBetween(20, 35));
      const speed = randomBetween(25, 40);
      s.velocity.set(-Math.cos(angle), -Math.sin(angle)).multiplyScalar(speed);
      group.position.set(
        randomBetween(-0.2, 1) * halfW,
        randomBetween(0.3, 1) * halfH,
        -STAR_DEPTH
      );
      group.rotation.z = Math.atan2(s.velocity.y, s.velocity.x);
      group.scale.set(randomBetween(3, 5), randomBetween(0.04, 0.06), 1);
      s.life = randomBetween(1, 1.4);
      s.age = 0;
      s.active = true;
      group.visible = true;
    }

    s.age += delta;
    group.position.x += s.velocity.x * delta;
    group.position.y += s.velocity.y * delta;
    material.opacity = Math.sin(Math.PI * Math.min(s.age / s.life, 1)) * 0.8;

    if (s.age >= s.life) {
      s.active = false;
      s.wait = randomBetween(4, 10);
      group.visible = false;
    }
  });

  return (
    <group ref={groupRef} visible={false}>
      <mesh geometry={geometry} position={[-0.5, 0, 0]}>
        <meshBasicMaterial
          ref={materialRef}
          vertexColors
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

// Follows the camera so streaks stay on screen while OrbitControls auto-rotates
const ShootingStars = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.position.copy(camera.position);
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group ref={ref}>
      <ShootingStar initialDelay={2} />
      <ShootingStar initialDelay={7} />
    </group>
  );
};

const SocialLink = ({ href, icon: Icon, label, download }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    download={download}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
  >
    <Icon className="text-gray-400 group-hover:text-blue-400 transition-colors" size={18} />
    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
      {label}
    </span>
  </motion.a>
);

const Home = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />

          {/* Layer 1: Distant Stars (White, Static-ish) */}
          <Sparkles
            count={12000}
            scale={120}
            size={3}
            speed={0.1}
            opacity={1}
            color="#ffffff"
          />

          {/* Layer 2: Foreground Galaxy Dust (Blue/Purple, Moving) */}
          <Sparkles
            count={3000}
            scale={90}
            size={5}
            speed={0.4}
            opacity={0.6}
            color="#4f46e5"
          />

          {/* Shooting Stars */}
          {!reduceMotion && <ShootingStars />}

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-0" />

      {/* Main Content: flex-col center everything */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center gap-8">

        {/* Profile Image (Centered) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }} // Smoother transition
          viewport={{ once: true }}
          className="relative group shrink-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
          <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 bg-gray-900 ring-4 ring-black">
            <Image
              src="/profile.jpg"
              alt="Venkata Rohan"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content (Centered) */}
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Updated Title Style */}
            <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text font-bold tracking-[0.2em] text-sm md:text-lg mb-3">
              Staff AI Engineer · Agentic AI · LLM Systems
            </h2>
            {/* 
                  Adjusted size: Bigger than others but not overwhelming.
                  Mobile: 2.5rem (40px) -> Desktop: 4.5rem (72px)
                */}
            <h1 className="font-extrabold text-white tracking-tight mb-4 leading-none" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Venkata Rohan
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-5 mb-8"
          >
            <SocialLink
              href="https://github.com/VenkataRohan"
              icon={FaGithub}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/venkata-rohan"
              icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:venkatarohank@gmail.com"
              icon={FaEnvelope}
              label="Email"
            />
            <SocialLink
              href="./Venkata_Rohan_Resume.pdf"
              icon={FaFileLines}
              label="Resume"
              download="Venkata_Rohan_Resume.pdf"
            />
          </motion.div>

          {/* Added textWrap: balance for perfect symmetry */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-300 text-md md:text-lg font-light leading-relaxed max-w-4xl mx-auto text-center block"
            style={{ textWrap: "balance" }}
          >
            I build production AI agents that act on real enterprise systems: multi-agent orchestration, RAG, and MCP tool servers on Google Cloud and Microsoft Azure, secured with verified-identity controls and human-in-the-loop approvals.
          </motion.p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-0 cursor-pointer group"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 5, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            className="-mt-2 first:mt-0"
          >
            <FaChevronDown
              className="text-white/70 group-hover:text-white transition-colors duration-300"
              size={16 + i * 6}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Home;