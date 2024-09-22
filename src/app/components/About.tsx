"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-md relative"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-bold mb-6 text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          I&apos;m a full-stack developer proficient in MERN stack, Next.js,
          JavaScript, TypeScript, Socket.IO, WebRTC, API handling, SDK
          utilization, and also working on web3.0 real-time projects. I enjoy
          building engaging web applications that solve real-world problems.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            View My Projects
          </a>
        </motion.div>
      </div>

      {/* Optional decorative element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/3 w-1/2 h-1/2 bg-gradient-to-r from-blue-500 to-blue-900 opacity-20 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}
