"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-4">Hi, I&apos;m Danyal</h1>
        <p className="text-2xl mb-8">
          Full Stack Web2.0 Developer &amp; engineer
        </p>
        <a
          href="#contact"
          className="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-teal-300 transition-colors"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
