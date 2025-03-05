import Image from "next/image";
import Experience from "./components/Experience";
import Achievements from "./components/Achivements";
import Contact from "./components/Contact";

export default function Home() {
  return (<>
      <Experience/>
      <Achievements/>
      <Contact/>
   </>
  );
}
