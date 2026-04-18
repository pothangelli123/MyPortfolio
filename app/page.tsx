import Navbar from "@/components/Navbar2";
import Hero from "@/components/Hero2";
import About from "@/components/About2";
import Skills from "@/components/Skills2";
import Projects from "@/components/Projects2";
import Experience from "@/components/Experience2";
import Contact from "@/components/Contact2";
import Footer from "@/components/Footer2";
import AnimatedGradient from "@/components/Background/AnimatedGradient";

export default function Home() {
  return (
    <>
      <AnimatedGradient />
      <main className="flex flex-col relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
