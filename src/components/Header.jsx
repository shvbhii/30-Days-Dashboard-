// src/components/Header.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    // --- UPDATED: Added background and blur for better visibility ---
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        {/* --- UPDATED: Adjusted font size for mobile --- */}
        <div className="text-base sm:text-lg font-bold">
          Shubhi Sharma | July 2025
        </div>
        <motion.button
          onClick={toggleTheme}
          className="p-2 text-xl rounded-full text-zinc-800 dark:text-yellow-400 bg-white/50 dark:bg-black/20 backdrop-blur-sm shadow-md"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </motion.button>
      </nav>
    </header>
  );
}

export default Header;