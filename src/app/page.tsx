'use client';
import Image from "next/image";
import Experience from "./components/Experience";
import Achievements from "./components/Achivements";
import Contact from "./components/Contact";
import AboutMe from "./components/About";
import Skill from "./components/Skill";

export default function Home() {
  return (<>
      <Experience/>
      <Achievements/>
      <Contact/>
      <AboutMe/>
      <Skill/>
   </>
  );
}
