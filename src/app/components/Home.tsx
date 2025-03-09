"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Custom Blinking Stars Component with TypeScript
const BlinkingStars = ({
  count,
  radius,
  depth,
  factor,
  fade,
}: {
  count: number;
  radius: number;
  depth: number;
  factor: number;
  fade: boolean;
}) => {
  const starsRef = useRef<THREE.Points>(null!);
  const [starSize, setStarSize] = useState(1); // State for star size
  const [starBrightness, setStarBrightness] = useState(1); // State for star brightness

  useEffect(() => {
    
    const stars = starsRef.current;
    const starPositions = stars.geometry.attributes.position.array;

    // Function to update star brightness and size
    const updateStars = () => {

      for (let i = 0; i < starPositions.length; i += 10) {
        const brightness = Math.random() * 0.5 + 0.5; // Random brightness between 0.5 and 1
        stars.geometry.attributes.color.array[i / 3] = brightness * starBrightness;
      }
      stars.geometry.attributes.color.needsUpdate = true;
      //@ts-ignore
      stars.material.size = starSize; // Update star size
    };

    // Animate star brightness and size
    const interval = setInterval(updateStars, 500); // Blink every 500ms
    return () => clearInterval(interval);
  }, [starSize, starBrightness]);

  return (
    <Stars
      ref={starsRef}
      // radius={radius}
      depth={depth}
      count={count}
      factor={factor}
      saturation={0}
      // fade={fade}
    />
  );
};

const Home = () => {

  return (
    <section
      id="home"
      className="relative h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* 3D Background Animation */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* Blinking Stars */}
          <BlinkingStars
            radius={200}
            depth={50}
            count={5000}
            factor={4}
            fade
          />
          {/* Crescent Moon */}
          <mesh position={[5, 40, -100]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="white" metalness={0.1} roughness={0.1} />
          </mesh>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 z-10 max-w-6xl mx-auto px-8"
      >
        {/* Profile Picture */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 mt-24 md:mt-0 rounded-full overflow-hidden border-4 border-white/20 hover:border-purple-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/profile.jpg" // Replace with your image path
            alt="Venkata Rohan"
            width={256}
            height={256}
            className="object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-left space-y-4 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Title */}
          <motion.h1
            className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-4xl md:text-6xl ">Hi, I'm Venkata Rohan</p>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl font-bold text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Software Developer @ Equinix | Open Source Contributor
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-lime-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            venkatarohank@gmail.com
          </motion.p>
          {/* Links */}
          <motion.div
            className="flex gap-8 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a
              href="https://github.com/VenkataRohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/venkata-rohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="./Venkata_Rohan_Resume.pdf" // Update this path
              download="Venkata_Rohan_Resume.pdf"
              className="text-white hover:text-purple-400 transition-colors text-lg font-semibold flex items-center gap-2"
            >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Resume
            </a>
            {/* <p>venkatarohank@gmail.com</p> */}
            {/* Resume Download Button */}
            {/* <a
               href="./Venkata_Rohan_Resume.pdf" // Update this path
               download="Venkata_Rohan_Resume.pdf"
               className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Resume
            </a> */}
          </motion.div>

          {/* Description */}
          <motion.div
            className="flex flex-col center w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-50 mb-6 ">
              Highly organized and motivated individual with strong analytical and mathematical skills. A quick learner, the object is to contribute significantly in the challenging high-level professional environment.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Home;