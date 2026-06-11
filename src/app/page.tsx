import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection, ExperienceSection } from "@/components/skills-experience-section";
import { BlogSection, ContactSection, Footer } from "@/components/blog-contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
