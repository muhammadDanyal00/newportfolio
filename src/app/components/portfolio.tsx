"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <header className="fixed w-full bg-gray-900 bg-opacity-70 backdrop-blur-md z-10">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.a
              href="/"
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              AK<span className="text-green-400">.</span>
            </motion.a>
            <div className="hidden md:flex space-x-4">
              {["About", "Projects", "Contact"].map((item) => (
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
            {["About", "Projects", "Contact"].map((item) => (
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

      <main>
        <section className="h-screen flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4">Hi, I&apos;m Ayan</h1>
            <p className="text-2xl mb-8">Webflow Developer &amp; Designer</p>
            <a
              href="#contact"
              className="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-teal-300 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </section>

        <section
          id="about"
          className="py-20 bg-gray-900 bg-opacity-60 backdrop-blur-md"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Hi there! I&apos;m a passionate Webflow and Figma developer
              dedicated to creating stunning and user-friendly websites. With a
              keen eye for design and a strong understanding of web development,
              I transform ideas into visually appealing digital experiences.
              Whether it&apos;s crafting responsive layouts or optimizing user
              interfaces, I thrive on bringing creativity and functionality
              together. Let&apos;s build something amazing! Feel free to
              customize any part of this section to better match your
              personality or specific skills!
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="py-20 bg-gray-800 bg-opacity-70 backdrop-blur-md"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-300">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <a
                href="https://akm-team-app.webflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="bg-gray-700 rounded-lg shadow-lg overflow-hidden h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image
                    src="/assets/team.webp"
                    alt="Chat App"
                    width={500}
                    height={300}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      Chat App
                    </h3>
                    <p className="text-white">
                      This is a homepage design and build for a chat
                      application. I designed the page first then built a
                      responsive web page using Webflow.
                    </p>
                  </div>
                </motion.div>
              </a>

              {/* Project 2 */}
              <a
                href="https://chat-app-0a3d.webflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="bg-gray-700 rounded-lg shadow-lg overflow-hidden h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src="/assets/chat.webp"
                    alt="Team App"
                    width={500}
                    height={300}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      Team App
                    </h3>
                    <p className="text-white">
                      Full website design and build for a team collaboration
                      platform. This website also includes a beautiful blog. I
                      built the website and the blog in Webflow which has one of
                      the best CMS for blog hosting.
                    </p>
                  </div>
                </motion.div>
              </a>

              {/* Add more projects as needed */}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 ">
          <div className="container mx-auto px-6 ">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Contact Information
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 space-y-4">
                  <div className="border-b border-gray-500 pb-2">
                    <h3 className="text-xl font-semibold mb-1">Name</h3>
                    <p>Ayan</p>
                  </div>
                  <div className="border-b border-gray-500 pb-2">
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p>Islamabad, Pakistan</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p>akayan3344@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 bg-opacity-70 backdrop-blur-md py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-teal-300 transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-teal-300 transition-colors">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-teal-300 transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
