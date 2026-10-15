import SmoothScroll from "../components/SmoothScroll";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import SkillsHall from "../components/SkillsHall";
import Partners from "../components/Partners";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Preloader />
      <Navbar />
      <Hero />
      <Manifesto />
      <Journey />
      <Projects />
      <SkillsHall />
      <Partners />
      <CTA />
      <Contact />
    </main>
  );
}
