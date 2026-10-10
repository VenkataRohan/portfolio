'use client';

import Experience from './components/Experience';
import AgenticWork from './components/AgenticWork';
import Project from './components/Project';
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
      <AgenticWork />
      <BestProject />
      <Project />
      <Achievements />
      <Contact />
    </div>
  );
}