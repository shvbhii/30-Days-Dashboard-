// src/components/ProjectModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 30 } },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          key="modal"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-6xl w-full"
        >
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-2xl text-zinc-500 hover:text-light-primary dark:hover:text-dark-primary transition-colors z-30"
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-4 items-center">

            {/* --- IMAGE PANEL (Slightly smaller to give details more room) --- */}
            <motion.div 
              className="md:col-span-7 w-full rounded-xl shadow-2xl bg-zinc-100 dark:bg-black overflow-hidden"
              initial={{x: -50, opacity: 0}}
              animate={{x: 0, opacity: 1, transition: {delay: 0.1, duration: 0.5}}}
            >
              <img 
                src={project.screenshot} 
                alt={project.title} 
                className="w-full h-full object-contain"
              />
            </motion.div>
          
            {/* --- DETAILS PANEL (Wider and starts earlier for more space) --- */}
            <motion.div 
              className="relative md:col-start-6 md:col-span-7 w-full z-10
                         mt-[-50px] md:mt-0 p-8 
                         bg-light-surface/80 dark:bg-dark-surface/80 
                         backdrop-blur-xl rounded-xl shadow-2xl 
                         border border-white/20 dark:border-zinc-700"
              initial={{x: 50, opacity: 0}}
              animate={{x: 0, opacity: 1, transition: {delay: 0.2, duration: 0.5}}}
            >
               <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider bg-light-primary/10 text-light-primary dark:bg-dark-primary/20 dark:text-dark-primary py-1 px-3 rounded-full self-start">
                  Day {project.id}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-2 mb-3">
                  {project.title}
                </h2>
                {/* --- Increased max-height for more visible text --- */}
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm max-h-40 overflow-y-auto whitespace-pre-wrap">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-light-primary text-white dark:bg-dark-primary dark:text-black font-bold rounded-lg hover:scale-105 transform transition-all duration-300">
                    <FaExternalLinkAlt /> View Live
                  </a>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-zinc-600 text-white dark:bg-zinc-700 font-semibold rounded-lg hover:scale-105 transform transition-all duration-300">
                    <FaGithub /> View Code
                  </a>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;