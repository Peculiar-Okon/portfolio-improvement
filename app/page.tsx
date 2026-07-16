import Navbar from "@/components/Layout/navbar";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/Projectsmain";
import ExpertiseSection from "@/components/sections/techStack/expertiseSection";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contacts";
import Footer from "@/components/sections/footer";
import WhatSetsMeApart from "@/components/sections/whatSetsMeApart";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <Projects />
        <ExpertiseSection />
        <WhatSetsMeApart />
        <ContactSection />
        <Footer />
        {/* Your Hero */}
      </main>
    </>
  );
}
