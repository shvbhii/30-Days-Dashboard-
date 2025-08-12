// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/shvbhi", // Your LinkedIn URL
    github: "https://github.com/shvbhii" // Your GitHub URL
  };

  return (
    <footer className="w-full py-8 text-center text-zinc-500 dark:text-zinc-400">
      <div className="flex items-center justify-center space-x-6 mb-4">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
          className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          title="GitHub Profile"
          className="text-2xl hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm">
        Created by Shubhi Sharma.
      </p>
      <p className="text-xs mt-1">
        Built with React, Vite, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
}

export default React.memo(Footer);