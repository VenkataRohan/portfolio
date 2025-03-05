import { motion } from 'framer-motion';

const skills = ['JavaScript', 'React.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'RabbitMQ', 'TypeScript'];

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


const Skill: React.FC = () => (
  <section id="skills" className="py-20 px-6 ">
  <div className="max-w-6xl mx-auto text-center py-20 px-6">
    {/* Section Title */}
    <h2 className="text-4xl font-semibold text-gray-900 mb-10">
      Skills
    </h2>

    {/* Skills Grid */}
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Trigger animation only once
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="relative bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg shadow-md text-center text-lg font-semibold text-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
          variants={itemVariants}
        >
          {/* Skill Text */}
          <span className="relative z-10">{skill}</span>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

          {/* Animation */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-lg transition-all duration-300"></div>
        </motion.div>
      ))}
    </motion.div>
  </div>
  </section>
);


export default Skill;