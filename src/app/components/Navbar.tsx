"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-70 backdrop-blur-md z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.a
            onClick={() => window.location.reload()}
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            DK<span className="text-green-400">.</span>
          </motion.a>
          <div className="hidden md:flex space-x-4">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-900 bg-opacity-80 backdrop-blur-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-6 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
