"use client";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-70 backdrop-blur-md py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {" "}
          {/* Increased spacing between icons */}
          <a
            href="https://x.com/danyalkhan_00"
            className="hover:text-teal-300 transition-colors"
          >
            <FaXTwitter size={24} /> {/* Adjusted icon size */}
          </a>
          <a
            href="https://www.linkedin.com/in/danyal-khan-29683221a/"
            className="hover:text-teal-300 transition-colors"
          >
            <FaLinkedin size={24} /> {/* Adjusted icon size */}
          </a>
          <a
            href="https://github.com/muhammadDanyal00"
            className="hover:text-teal-300 transition-colors"
          >
            <FaGithub size={24} /> {/* Adjusted icon size */}
          </a>
        </div>
      </div>
    </footer>
  );
}
