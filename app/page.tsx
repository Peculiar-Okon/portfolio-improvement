import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Project";
import WhatIBuild from "@/components/what-i-build/whatibuildmain";
import Journey from "@/components/journey/Journey";
import Contact from "@/components/contacts";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
      <Hero />
      <About />
      <Projects />
      <WhatIBuild />
      <Journey />
      <Contact />

      </main>
      <Footer />
    </>
  );
}
