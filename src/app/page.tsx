import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

