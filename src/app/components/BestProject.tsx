"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDocker, FaNetworkWired, FaGithub, FaXmark, FaCode } from "react-icons/fa6";
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiRabbitmq, SiPostgresql, SiPrisma, SiNginx } from "react-icons/si";
import Image from "next/image";

// Dynamic data for the project
const projectData = {
    title: "Stock Exchange",
    description: [
        `The Stock Exchange project was built using a **microservices architecture** to handle real-time trading of stocks. When a user places an order, the frontend sends a request to the API server, which publishes the order to a **RabbitMQ broker**. This ensures that the order is stored until the order book engine picks it up for processing. RabbitMQ provided high performance and fault tolerance by decoupling the services and ensuring reliable message delivery through features like message acknowledgments and durable queues.`,
        `For real-time updates, we used a **WebSocket-based pub-sub model** to scale the system and handle multiple clients efficiently. This model reduced WebSocket connection overhead and ensured low latency for real-time updates, making it highly scalable and reliable.`,
        `Used **Docker** for efficient deployment, utilised **Prisma ORM** for database manipulation, and **Nginx** for Load Balancing across websockets servers.`
    ],
    images: [
        {
            src: "/SE_Demo.gif",
            alt: "Stock Exchange Demo",
            width: 800,
            height: 500,
            title: "Real-Time Trading Demo",
        },
        {
            src: "/architecture.png",
            alt: "Architecture Diagram",
            width: 800,
            height: 500,
            title: "System Architecture",
        },
    ],
    technologies: [
        { name: "React.js", icon: SiReact, color: "text-cyan-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
        { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-500" },
        { name: "WebSocket", icon: FaNetworkWired, color: "text-white" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Prisma", icon: SiPrisma, color: "text-white" },
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Nginx", icon: SiNginx, color: "text-green-500" }
    ],
    githubLink: "https://github.com/VenkataRohan/stock_exchange",
};

const BestProject = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="bestproject" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-800/50">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Subtle top gradient for separation */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 mb-4 border border-purple-500/30 rounded-full bg-purple-950/20">
                        <span className="text-sm font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                            <FaCode className="text-sm" />
                            {projectData.title}
                        </span>
                    </div>

                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="space-y-6"
                    >
                        {projectData.images.map((image, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02, translateY: -5 }}
                                className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 shadow-2xl shadow-purple-900/10 cursor-pointer"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <div className="relative aspect-video w-full">
                                    {/* Using standard img tag for simplicity or Next.js Image if configured */}
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-medium text-lg">{image.title}</p>
                                    <p className="text-gray-400 text-sm">Click to enlarge</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Column: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="bg-gray-900/40 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-xl"
                    >
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-justify">
                            {projectData.description.map((text, i) => (
                                <p key={i}>
                                    {text.split('**').map((part, partIndex) =>
                                        partIndex % 2 === 1 ? (
                                            <strong key={partIndex} className="text-gray-200 font-semibold">
                                                {part}
                                            </strong>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                            ))}
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-2">
                                Technologies Stack
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {projectData.technologies.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-950/50 border border-gray-800 text-gray-300 text-sm hover:border-purple-500/30 transition-colors"
                                    >
                                        <tech.icon className={`text-lg ${tech.color}`} />
                                        <span className="leading-none">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-800/50">
                            <a
                                href={projectData.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10 w-full justify-center md:w-auto"
                            >
                                <FaGithub className="mr-2 text-xl" />
                                View Source on GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                                onClick={() => setSelectedImage(null)}
                            >
                                <FaXmark size={24} />
                            </motion.button>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-6xl w-full h-auto aspect-video rounded-xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Enlarged view"
                                    className="w-full h-full object-contain bg-black"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default BestProject;