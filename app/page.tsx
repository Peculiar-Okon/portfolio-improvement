import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/about";
import StackSection from "@/components/stack";
import FeaturedProjects from "@/components/projects/featuredProjects";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import SectionWrapper from "@/components/sectionWrapper";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper>
          <StackSection />
        </SectionWrapper>

        <SectionWrapper>
          <FeaturedProjects />
        </SectionWrapper>

        <SectionWrapper>
          <ExperienceSection />
        </SectionWrapper>

        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
