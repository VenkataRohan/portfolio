"use client"
import { motion } from 'framer-motion';
import { SiGeeksforgeeks, SiLeetcode, SiUdemy, SiGithub, SiReact, SiNodedotjs, SiCoursera, SiPython, SiTensorflow } from 'react-icons/si';
import { FaCode, FaTrophy, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const achievements = [
  {
    id: 1,
    platform: "GeeksForGeeks",
    role: "Coding Proficiency",
    description: "Solved 550+ coding questions with a score of 1812.",
    icon: SiGeeksforgeeks,
    color: "text-green-500",
    link: "https://www.geeksforgeeks.org/user/venkatarohank/?tab=activity",
    linkText: "View Profile"
  },
  {
    id: 2,
    platform: "LeetCode",
    role: "Problem Solving",
    description: "Solved 380+ questions covering Data Structures & Algorithms.",
    icon: SiLeetcode,
    color: "text-yellow-500",
    link: "https://leetcode.com/u/venkatarohank/",
    linkText: "View Profile"
  },
  {
    id: 3,
    platform: "InterviewBit",
    role: "Global Ranking",
    description: "Ranked 4836 globally with over 300 solved questions.",
    icon: FaCode,
    color: "text-blue-400",
    link: null,
    linkText: ""
  },
  {
    id: 4,
    platform: "Deep Learning",
    role: "Specialization",
    description: "Mastered NN, CNN, RNNs & Transformers by DeepLearning.AI.",
    icon: SiTensorflow,
    color: "text-orange-500",
    link: "https://www.coursera.org/account/accomplishments/verify/W5VAN3HVH9YN",
    linkText: "View Certificate"
  },
  {
    id: 5,
    platform: "Python For Everybody",
    role: "Specialization",
    description: "Comprehensive Python specialization by Univ. of Michigan.",
    icon: SiPython,
    color: "text-blue-400",
    link: "https://www.coursera.org/account/accomplishments/specialization/TD9HA24CG6MH",
    linkText: "View Certificate"
  },
  {
    id: 6,
    platform: "Open Source",
    role: "Contributor",
    description: "Contributed to LightDash, Rocket.Chat and Cal.com.",
    icon: SiGithub,
    color: "text-white",
    link: null,
    linkText: ""
  },
  {
    id: 7,
    platform: "Node.js",
    role: "Certification",
    description: "Completed comprehensive Node.js training on Udemy.",
    icon: SiNodedotjs,
    color: "text-green-400",
    link: "https://www.udemy.com/certificate/UC-10900e3a-74c5-452e-a905-b3d52f154758/",
    linkText: "View Certificate"
  },
  {
    id: 8,
    platform: "React.js",
    role: "Certification",
    description: "Mastered React.js ecosystem and modern hooks.",
    icon: SiReact,
    color: "text-cyan-400",
    link: "https://www.udemy.com/certificate/UC-0f7a2701-4483-46a7-9086-a8500f829f08/",
    linkText: "View Certificate"
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-900">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-950/20">
            <span className="text-sm font-bold text-blue-300 uppercase tracking-wider flex items-center gap-2">
              <FaTrophy className="text-sm" />
              Coding & Certifications
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed text-center">
            A showcase of my competitive coding journey, open source contributions, and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ translateY: -5 }}
              className={`group relative p-8 rounded-3xl bg-gray-900/40 border border-white/5 hover:bg-gray-900/60 hover:border-blue-500/30 transition-all duration-300 shadow-xl flex flex-col ${item.link ? 'cursor-pointer' : ''}`}
            >
              {/* Overlay Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${item.platform} profile`}
                >
                  <span className="sr-only">View {item.platform}</span>
                </a>
              )}

              <div className="flex items-start justify-between mb-6 relative z-0">
                <div className={`p-3 rounded-2xl bg-gray-950/50 border border-gray-800 group-hover:bg-gray-900 group-hover:border-gray-700 transition-colors ${item.color}`}>
                  <item.icon size={28} />
                </div>
                {item.link && (
                  <div
                    className="p-2 text-gray-500 group-hover:text-blue-400 transition-colors"
                  >
                    <FaArrowUpRightFromSquare />
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors relative z-0">
                {item.platform}
              </h3>
              <p className="text-xs font-bold text-blue-500/80 uppercase tracking-wider mb-4 relative z-0">
                {item.role}
              </p>

              <p className="text-gray-400 leading-relaxed text-sm h-10 relative z-0">
                {item.description}
              </p>

              {/* Decorative gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;