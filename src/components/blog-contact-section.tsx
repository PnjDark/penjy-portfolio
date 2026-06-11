import { articles, siteConfig } from "@/lib/data";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export function BlogSection() {
  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Technical Articles
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Deep dives into architecture, infrastructure, and lessons learned building
            production systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="group border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted">{article.description}</p>
                <div className="flex justify-between items-center text-xs text-muted pt-4 border-t border-border">
                  <span>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors font-semibold"
        >
          Read all articles
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted">
            Whether you need help building scalable systems, optimizing infrastructure,
            or want to discuss architecture patterns—I&apos;m available for consulting,
            collaboration, and speaking engagements.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-6 py-8">
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="p-6 border border-border rounded-lg hover:border-accent/50 transition-colors group"
          >
            <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-foreground mb-2">Email</p>
            <p className="text-sm text-muted break-all">{siteConfig.social.email}</p>
          </a>

          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-border rounded-lg hover:border-accent/50 transition-colors group"
          >
            <Linkedin className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-foreground mb-2">LinkedIn</p>
            <p className="text-sm text-muted">Connect with me</p>
          </a>

          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-border rounded-lg hover:border-accent/50 transition-colors group"
          >
            <Github className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-foreground mb-2">GitHub</p>
            <p className="text-sm text-muted">View my code</p>
          </a>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-border">
          <p className="text-muted mb-6">
            Open to exploring new opportunities, consulting engagements, and interesting
            technical challenges.
          </p>
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send me an email
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-muted text-sm">
          © {currentYear} Patrick Narmaye. All rights reserved.
        </div>
        <div className="flex gap-6 text-muted">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
