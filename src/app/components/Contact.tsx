"use client";
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 bg-[#050505] overflow-hidden border-t border-gray-900">
      {/* Background Effects - Distinct from others (Indigo/Purple glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-black pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-indigo-500/30 rounded-full bg-indigo-950/20">
            <span className="text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <FaEnvelope className="text-sm" />
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Build Something <span className="text-indigo-400">Extraordinary</span>
          </h2>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-4xl mx-auto text-center p-1">
            Have a question or want to work together? Get in touch — I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
            <motion.a
              href="mailto:venkatarohank@gmail.com"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-8 py-3 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-indigo-500/50 rounded-xl group-hover:border-indigo-400/80 transition-colors duration-300" />
              <FaEnvelope className="text-xl text-indigo-400 group-hover:text-indigo-300 transition-colors relative z-10" />
              <span className="font-bold text-gray-200 group-hover:text-white transition-colors relative z-10">Email</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/venkata-rohan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-8 py-3 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-blue-500/50 rounded-xl group-hover:border-blue-400/80 transition-colors duration-300" />
              <FaLinkedin className="text-xl text-blue-400 group-hover:text-blue-300 transition-colors relative z-10" />
              <span className="font-bold text-gray-200 group-hover:text-white transition-colors relative z-10">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/VenkataRohan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-8 py-3 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-purple-500/50 rounded-xl group-hover:border-purple-400/80 transition-colors duration-300" />
              <FaGithub className="text-xl text-white group-hover:text-purple-200 transition-colors relative z-10" />
              <span className="font-bold text-gray-200 group-hover:text-white transition-colors relative z-10">GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;