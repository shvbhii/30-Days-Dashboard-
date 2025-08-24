// src/data/projectsData.js
import project1Screenshot from '/src/assets/project-1.png';
import project2Screenshot from '/src/assets/project-2.png';
import project3Screenshot from '/src/assets/project-3.png';
import project4Screenshot from '/src/assets/project-4.png';
import project5Screenshot from '/src/assets/project-5.png';
import project6Screenshot from '/src/assets/project-6.png';
import project7Screenshot from '/src/assets/project-7.png';
import project8Screenshot from '/src/assets/project-8.png';
import project9Screenshot from '/src/assets/project-9.png';
import project10Screenshot from '/src/assets/project-10.png';
import project11Screenshot from '/src/assets/project-11.png';
import project12Screenshot from '/src/assets/project-12.png';
import project13Screenshot from '/src/assets/project-13.png';
import project14Screenshot from '/src/assets/project-14.png';
import project15Screenshot from '/src/assets/project-15.png';
import project16Screenshot from '/src/assets/project-16.png';
import project17Screenshot from '/src/assets/project-17.png';
import project18Screenshot from '/src/assets/project-18.png';
import project19Screenshot from '/src/assets/project-19.png';
import project20Screenshot from '/src/assets/project-20.png';
import project21Screenshot from '/src/assets/project-21.png';
import project22Screenshot from '/src/assets/project-22.png';
import project23Screenshot from '/src/assets/project-23.png';
import project24Screenshot from '/src/assets/project-24.png';
import project25Screenshot from '/src/assets/project-25.png';
import project26Screenshot from '/src/assets/project-26.png';
import project27Screenshot from '/src/assets/project-27.png';
import project28Screenshot from '/src/assets/project-28.png';
import project29Screenshot from '/src/assets/project-29.png';
import project30Screenshot from '/src/assets/project-30.png';

export const projects = [
  {
    id: 1,
    title: "Vibe Typing - A Minimalist Typing Test",
    description: "A calm, focused, and aesthetically pleasing environment to test your typing speed. Features real-time WPM & Accuracy, a minimalist dark-themed UI, and a fully responsive design.",
    // STEP 2: Use the imported variable here instead of the string path.
    screenshot: project1Screenshot,
    liveUrl: "https://lnkd.in/dzNXWiTp",
    codeUrl: "https://lnkd.in/dGJHXWNw",
  },
  {
    id: 2,
    title: "The Polaroid Photo Frame Maker",
    description: "A digital scrapbooking tool to turn any photo into a custom piece of art. Features photo uploads, creative frame customization, handwritten fonts, interactive stickers, and one-click downloads.",
    // Use the variable for project 2
    screenshot: project2Screenshot,
    liveUrl: "https://lnkd.in/dhmM6SjJ",
    codeUrl: "https://lnkd.in/d_HhXCfB",
  },
  {
    id: 3,
    title: "Minigame Studio",
    description: "Minigame Studio is a fully functional front-end application that simulates a retro arcade experience in the browser.\n\nThe games included are:\n\n- Flappy Dot: A challenging 'Flappy Bird' clone with moving pipes and dynamic physics.\n- Dodge the Pixel: A fast-paced avoider game with progressive difficulty and a neon aesthetic.\n- Color Catch: A rhythm-based timing game with a combo multiplier, synced to a lofi beat.",
    // The placeholder URL is NOT a local file, so we keep it as a string. This is correct.
    screenshot: 'https://placehold.co/1280x720/1a1a1a/ffffff?text=Minigame+Studio',
    liveUrl: "#",
    codeUrl: "#",
  },
];