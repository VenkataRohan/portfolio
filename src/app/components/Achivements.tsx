"use client"
import { motion } from 'framer-motion';
import { Box, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";
const achievements = [
  {
    id: 1,
    description: (
      <p className="text-lg text-gray-700">
        Solved <strong>550+</strong> coding questions on <strong>GeeksForGeeks</strong> with a score of <strong>1812</strong>.
        <Link
                href={`https://www.geeksforgeeks.org/user/venkatarohank/`}
                target='_blank'
                className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
                bgGradient="linear(to-r, pink.800, green.800)"
                _hover={{ bgGradient: "linear(to-r, pink.600, green.600)" }}
                bgClip={["text"]}
                px={2}
              >
                (Profile Link)
              </Link>
      </p>
    ),
  },
  {
    id: 2,
    description: (
      <p className="text-lg text-gray-700">
        Ranked <strong>4836</strong> globally on <strong>InterviewBit</strong> with over <strong>300</strong> solved questions.
      </p>
    ),
  },
  {
    id: 3,
    description: (
      <p className="text-lg text-gray-700">
        Solved <strong>250+</strong> questions on <strong>Leetcode</strong>.
        <Link
                href={`https://leetcode.com/u/venkatarohank/`}
                target='_blank'
                className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
                bgGradient="linear(to-r, pink.800, green.800)"
                _hover={{ bgGradient: "linear(to-r, pink.600, green.600)" }}
                bgClip={["text"]}
                px={2}
              >
                (Profile Link)
              </Link>
      </p>
    ),
  },
  {
    id: 4,
    description: (
      <p className="text-lg text-gray-700">
        Contributed to open-source projects including <strong>LightDash</strong>, <strong>Rocket.Chat</strong>, and <strong>Cal.com</strong>.
      </p>
    ),
  },
  {
    id: 5,
    description: (
      <p className="text-lg text-gray-700">
        Completed <strong>Node.js</strong> Certification. 
        <Link
                href={`https://www.udemy.com/certificate/UC-10900e3a-74c5-452e-a905-b3d52f154758/`}
                target='_blank'
                className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
                bgGradient="linear(to-r, pink.800, green.800)"
                _hover={{ bgGradient: "linear(to-r, pink.600, green.600)" }}
                bgClip={["text"]}
                px={2}
              >
                (Certification Link)
              </Link>
      </p>
    ),
  },
  {
    id: 6,
    description: (
      <p className="text-lg text-gray-700">
        Completed <strong>React.js</strong> Certification. 
        <Link
                href={`https://www.udemy.com/certificate/UC-0f7a2701-4483-46a7-9086-a8500f829f08/`}
                target='_blank'
                className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
                bgGradient="linear(to-r, pink.800, green.800)"
                _hover={{ bgGradient: "linear(to-r, pink.600, green.600)" }}
                bgClip={["text"]}
                px={2}
              >
                (Certification Link)
              </Link>
      </p>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animations for each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Achievements = () => {
  return (
    <section id="coding profile" style={{ scrollMarginTop: "20px" }}>
    <div className="max-w-6xl mx-auto text-center py-20 px-6">
    <motion.div
          initial={{ opacity: 0, y: -20, x: -100 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
        // viewport={{ once : true }}
        >
      <Box
            textAlign="center"
            mb={12}
            // animation={sectionInView ? `${slideInFromLeft} 1s ease-in-out` : "none"}
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
              Coding Profile
            </Text>
          </Box>
          </motion.div>
      {/* Achievements List */}
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }} // Trigger animation only once
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="relative bg-gradient-to-br from-lime-500 to-blue-500 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            variants={itemVariants}
          >
            <div className="relative z-10">{achievement.description}</div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-lg transition-all duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </section>
  );
};

export default Achievements;