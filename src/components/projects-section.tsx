import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Featured Projects
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Case studies of production systems I&apos;ve built and shipped. Each project
            represents significant technical challenges solved at scale.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="grid md:grid-cols-2 gap-8 items-start">
              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="space-y-2">
                  <p className="text-sm text-accent font-semibold uppercase tracking-wide">
                    {project.year} • {project.role}
                  </p>
                  <h3
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted">{project.tagline}</p>
                </div>

                {/* Challenge */}
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">The Challenge</p>
                  <p className="text-muted leading-relaxed">{project.challenge}</p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">The Solution</p>
                  <p className="text-muted leading-relaxed">{project.solution}</p>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Results</p>
                  <ul className="space-y-1 text-muted">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-card border border-border rounded-full text-sm text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors"
                    >
                      View Live
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors"
                    >
                      View Code
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Image/Stats */}
              <div
                className={`flex flex-col gap-4 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                {/* Placeholder for project image */}
                <div className="bg-card border border-border rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent/50 mb-2">
                      {project.title.substring(0, 1)}
                    </div>
                    <p className="text-muted text-sm">{project.tagline}</p>
                  </div>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="bg-card border border-border p-3 rounded-lg">
                      <p className="text-xs text-muted uppercase tracking-wide">{key}</p>
                      <p className="text-lg font-semibold text-foreground mt-1">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
