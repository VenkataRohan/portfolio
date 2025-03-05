"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutMe = () => {
    return (
        <section id="about" >
            <div className="max-w-full mx-auto text-center py-20 px-10 ">
                {/* Section Title */}
                <motion.h2
                    className="text-sm font-bold text-gray-50 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}

                >
                    About Me
                </motion.h2>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image */}
                    <motion.div
                        className="md:w-1/2 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/about.jpeg" // Replace with your image
                            alt="About Me"
                            width={500}
                            height={350}
                            className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                    
                    {/* Text Content */}
                    <motion.div
                        className="flex flex-col center md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-50 mb-6">
                            I’m a passionate <strong>full-stack developer</strong> with expertise in building scalable and efficient web applications using modern technologies like{' '}
                            <strong>React.js</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. I specialize in creating seamless user experiences and robust backend systems.
                        </p>
                        <p className="text-lg text-gray-50 mb-6">
                            With a strong foundation in <strong>microservices architecture</strong>, <strong>real-time systems</strong>, and <strong>cloud technologies</strong>, I’ve successfully delivered projects that improve efficiency and user engagement.
                        </p>
                        <p className="text-lg text-gray-50">
                            I graduated from <strong>Mahindra University</strong> with a CGPA of <strong>8.5</strong>, and I’ve contributed to open-source projects like{' '}
                            <strong>LightDash</strong> and <strong>Rocket.Chat</strong>. I’m always eager to learn and adapt to new challenges in the ever-evolving tech landscape.
                        </p>
                    </motion.div>

                    
                </div>
            </div>
        </section>
    );
};

export default AboutMe;