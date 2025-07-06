"use client"
import { motion } from 'framer-motion';
import { Box, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";
const achievements = [
  {
    id: 1,
    description: "Solved 550+ coding questions on GeeksForGeeks with a score of 1812.",
    link: "https://www.geeksforgeeks.org/user/venkatarohank/",
    linkText: "(Profile Link)"
  },
  {
    id: 2,
    description: "Ranked 4836 globally on InterviewBit with over 300 solved questions.",
  },
  {
    id: 3,
    description: "Solved 300+ questions on Leetcode.",
    link: "https://leetcode.com/u/venkatarohank/",
    linkText: "(Profile Link)"
  },
  {
    id: 4,
    description: "Contributed to open-source projects including LightDash, Rocket.Chat and Cal.com",
  },
  {
    id: 5,
    description: "Completed Node.js Certification.",
    link: "https://www.udemy.com/certificate/UC-10900e3a-74c5-452e-a905-b3d52f154758/",
    linkText: "(Certification Link)"
  },
  {
    id: 6,
    description: "Completed React.js Certification.",
    link: "https://www.udemy.com/certificate/UC-0f7a2701-4483-46a7-9086-a8500f829f08/",
    linkText: "(Certification Link)"
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
            {achievement.link ? (
              <Link
                href={achievement.link}
                target="_blank"
                className="block relative z-10 cursor-pointer"
                _hover={{ textDecoration: "none" }}
              >
                <div className="text-lg text-gray-700">
                  {achievement.description.split(' ').map((word, index) => {
                    // Make numbers and key terms bold
                    if (/^\d+/.test(word) || ['GeeksForGeeks', 'InterviewBit', 'Leetcode', 'LightDash', 'Rocket.Chat', 'Cal.com', 'Node.js', 'React.js'].includes(word.replace(/[^\w.]/g, ''))) {
                      return <strong key={index}>{word} </strong>;
                    }
                    return word + ' ';
                  })}
                  <span className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300 bg-gradient-to-r from-pink-800 to-green-800 bg-clip-text px-2">
                    {achievement.linkText}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="relative z-10">
                <div className="text-lg text-gray-700">
                  {achievement.description.split(' ').map((word, index) => {
                    // Make numbers and key terms bold
                    if (/^\d+/.test(word) || ['GeeksForGeeks', 'InterviewBit', 'Leetcode', 'LightDash', 'Rocket.Chat', 'Cal.com', 'Node.js', 'React.js'].includes(word.replace(/[^\w.]/g, ''))) {
                      return <strong key={index}>{word} </strong>;
                    }
                    return word + ' ';
                  })}
                </div>
              </div>
            )}

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