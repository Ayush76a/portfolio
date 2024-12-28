import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import Skill from "./components/skill";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skill />
      <Project />
      <Contact />
    </div>   
  );
}
