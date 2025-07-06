"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";

const aboutContent = [
  {
    text: `I'm a <strong>Collaborative Full-Stack Software Developer</strong> with expertise in <strong>React.js</strong>, <strong>Node.js</strong>, 
    and <strong>Azure cloud services</strong>. I specialize in delivering enterprise-grade applications, <strong>RAG systems</strong>, and process automation tools. With a strong background 
    in <strong>open-source contributions</strong>, <strong>CI/CD implementation</strong>, and <strong>cross-functional team collaboration</strong>, I've made measurable impact on operational 
    efficiency and user satisfaction. I'm passionate about building scalable solutions and always eager to learn and adapt to new challenges in the ever-evolving tech landscape.`
  }
];

const AboutMe = () => {
  return (
    <section id="about" style={{ scrollMarginTop: "60px" }}>
      <div className="max-w-full mx-auto text-center py-10 px-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-100%" }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Box
            textAlign="center"
            mb={12}
          >
            <Text
              display="inline-block"
              px={4}
              py={2}
              fontSize="sm"
              fontWeight="semibold"
              color="cyan.300"
              bg="cyan.900"
              rounded="full"
              textTransform="uppercase"
            >
              About Me
            </Text>
          </Box>
        </motion.div>
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <motion.div
            className="lg:pl-4 md:w-1/2 mt-8 md:mt-0 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            // viewport={{ once: true }}
          >
            <Image
              src="/about.jpeg" 
              alt="About Me"
              width={500}
              height={350}
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col center md:w-1/2  md:pl-2  py-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // viewport={{ once: true }}
          >
            {aboutContent.map((content, index) => (
              <p 
                key={index} 
                className={`text-lg text-gray-50 ${index < aboutContent.length - 1 ? 'mb-6' : ''}`}
                dangerouslySetInnerHTML={{ __html: content.text }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;