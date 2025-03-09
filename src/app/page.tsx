'use client';

import Experience from './components/Experience';
import Project from './components/Project';
import Skill from './components/Skill';
import Achievements from './components/Achivements';
import AboutMe from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import BestProject from './components/BestProject';

export default function Main() {
  return (
    <div className="bg-gray-900 font-sans">
      <Home />
      <AboutMe />
      <Experience />
      <BestProject/>
      <Project />
      <Skill />
      <Achievements />
      <Contact />
    </div>
  );
}