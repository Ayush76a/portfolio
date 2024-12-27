import Image from "next/image";
import Hero from "./components/hero";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Contact />
    </div>   
  );
}
