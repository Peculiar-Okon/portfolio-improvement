import Navbar from "@/components/Layout/navbar";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/Projectsmain";
import ExpertiseSection from "@/components/sections/techStack/expertiseSection";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contacts";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        {/* Your Hero */}
      </main>
    </>
  );
}
