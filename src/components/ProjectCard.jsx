// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ project, onViewDetails }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 20 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
      className="group relative rounded-xl overflow-hidden
                 bg-light-surface dark:bg-dark-surface 
                 shadow-md dark:shadow-xl
                 transition-all duration-300
                 hover:shadow-lg hover:dark:shadow-2xl hover:dark:shadow-dark-primary/20
                 border border-zinc-200 dark:border-zinc-700
                 flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={project.screenshot}
          alt={project.title}
          className="w-full h-56 object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* --- NEW "DAY" BADGE --- */}
        <span className="mb-2 text-xs font-bold uppercase tracking-wider 
                         bg-light-primary/10 text-light-primary 
                         dark:bg-dark-primary/20 dark:text-dark-primary 
                         py-1 px-3 rounded-full self-start">
          Day {project.id}
        </span>

        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white flex-grow">
          {project.title}
        </h3>
        <button
          onClick={() => onViewDetails(project)}
          className="w-full mt-4 py-3 px-4 
                     bg-light-primary text-white dark:bg-dark-surface
                     font-semibold rounded-lg 
                     border-2 border-transparent dark:border-dark-primary dark:text-dark-primary
                     hover:bg-opacity-90 dark:hover:bg-dark-primary dark:hover:text-black
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:focus:ring-dark-primary
                     transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;