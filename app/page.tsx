import Navbar from "@/components/Layout/navbar";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/Projectsmain";
import ExpertiseSection from "@/components/sections/techStack/expertiseSection";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contacts";
import Footer from "@/components/sections/footer";
import WhatSetsMeApart from "@/components/sections/whatSetsMeApart";
import FadeIn from "@/components/UI/fadein";

export default function Home() {
  return (
    <>
      <Navbar />

<main>
  <FadeIn>
    <Hero />
  </FadeIn>

  <FadeIn delay={0.08}>
    <AboutSection />
  </FadeIn>

  <FadeIn delay={0.08}>
    <Projects />
  </FadeIn>

  <FadeIn delay={0.1}>
    <ExpertiseSection />
  </FadeIn>

  <FadeIn delay={0.12}>
    <WhatSetsMeApart />
  </FadeIn>

  <FadeIn delay={0.15}>
    <ContactSection />
  </FadeIn>

  <FadeIn delay={0.18}>
    <Footer />
  </FadeIn>
</main>
    </>
  );
}
