"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, Trail } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import * as THREE from "three";
import { FaGithub, FaLinkedin, FaFileLines, FaEnvelope, FaChevronDown } from "react-icons/fa6";

const ShootingStar = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      // Move diagonally very slow
      ref.current.position.x -= 0.05;
      ref.current.position.y -= 0.01;

      // Reset if out of view (Extended bounds for full screen travel)
      if (ref.current.position.y < -10 || ref.current.position.x < -30) {
        const randomX = 50 + Math.random() * 30;   // Start further right (off-screen)
        const randomY = 5 + Math.random() * 20;    // Start top/mid
        const randomZ = -15 + Math.random() * 10;  // Deep background
        ref.current.position.set(randomX, randomY, randomZ);
      }
    }
  });

  return (
    <Trail
      width={0.6} // Thicker to be visible at distance
      length={8} // Longer tail
      color={new THREE.Color(1, 0.4, 0.2)} // Fire Orange/Red
      attenuation={(t) => t * t} // Smooth fade
    >
      <mesh ref={ref} position={[30, 10, -10]}>
        <sphereGeometry args={[0.15]} />
        <meshBasicMaterial color={[3, 1, 0.5]} toneMapped={false} />
      </mesh>
    </Trail>
  );
};

const SocialLink = ({ href, icon: Icon, label, download = false }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    download={download ? label : undefined}
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
          <ShootingStar />
          <ShootingStar />
          <ShootingStar />

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
              AI Engineer
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
              download
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
            Strategic-minded professional with strong analytical acumen.
            Focused on delivering high-impact solutions through technical expertise
            and innovative problem-solving.
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