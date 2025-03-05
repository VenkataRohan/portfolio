"use client";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-700/20 animate-move-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Feel free to reach out to me via email or social media. I'm always open to new opportunities, collaborations, or just a friendly chat!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:venkatarohank@gmail.com"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/venkata-rohan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;