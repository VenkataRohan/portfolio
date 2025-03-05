"use client"
import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    description: (
      <p className="text-lg text-gray-700">
        Solved <strong>550+</strong> coding questions on <strong>GeeksForGeeks</strong> with a score of <strong>1812</strong>.
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
        Contributed to numerous open-source projects including <strong>LightDash</strong>, <strong>Rocket.Chat</strong>, and <strong>Cal.com</strong>.
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
    <section id="achievements">
    <div className="max-w-6xl mx-auto text-center py-20 px-6">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-10">
        Achievements
      </h2>

      {/* Achievements List */}
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation only once
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="relative bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
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