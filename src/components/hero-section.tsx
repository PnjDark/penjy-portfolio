import { siteConfig } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Patrick Narmaye
          </h1>
          <p className="text-xl md:text-2xl text-muted">
            Software Engineer & DevOps Specialist
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Building scalable systems and cloud infrastructure. I specialize in full-stack
          development, DevOps automation, and cloud architecture for high-performance
          applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-card transition-colors"
          >
            Get in Touch
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center pt-8">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
