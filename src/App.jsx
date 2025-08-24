// src/App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaArrowDown } from 'react-icons/fa';

import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projects as projectsData } from './data/projectsData';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const linkedInUrl = "https://www.linkedin.com/in/shvbhi";

  const handleViewDetails = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="text-zinc-800 dark:text-zinc-200">
      <Header />

      <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-shadow-lg"
          >
            <span className="text-zinc-900 dark:text-white">30 Days</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-secondary"> 30 Projects</span>
          </motion.h1>
          
          <motion.p variants={item} className="mt-4 max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-300">
            A month-long challenge to build and ship one web project every day.<br/> <br/>
            Not just about coding it was about balancing DSA practice, hackathons, and daily deadlines. Learning <b>consistency, time management, and discipline</b> along the way.<br />
            Some projects were simple experiments, others turned into tools I still use, but each one was a step forward! <br /> <br />
            This dashboard is a snapshot of the journey, bringing all 30 projects together in one place.
          </motion.p>
          
          <motion.a
            variants={item}
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 py-3 px-6 bg-light-primary text-white dark:bg-dark-primary dark:text-black font-bold rounded-full shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-dark-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Connect on LinkedIn <FaLinkedin />
          </motion.a>
        </motion.div>
        
        <a href="#projects-grid" className="absolute bottom-10 animate-bounce">
          <FaArrowDown className="text-2xl text-zinc-500 hover:text-light-primary dark:hover:text-dark-primary" />
        </a>
      </section>
      
      {/* --- UPDATED: REMOVED max-w-6xl for a full-width layout --- */}
      <main id="projects-grid" className="py-24 px-4 sm:px-6 lg:px-8">
         <h2 className="text-4xl font-bold text-center mb-12">Explore the Projects</h2>
        <motion.div 
          /* --- UPDATED: Added xl and 2xl column classes to fill the screen --- */
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
          ))}
        </motion.div>
      </main>

      <Footer />
      
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
      </AnimatePresence>
    </div>
  );
}

export default App;