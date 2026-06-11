"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="w-full px-6 py-20 sm:px-8 md:px-12 lg:py-32">
      <motion.div
        className="mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-balance mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Case studies showcasing engineering excellence, from architecture to
            deployment. Each project demonstrates problem-solving and technical
            leadership.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid gap-8 md:gap-12"
          variants={containerVariants}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group border border-border rounded-lg p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="mb-6 md:mb-0">
                {/* Project title */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="text-base text-foreground mb-6">
                  {project.description}
                </p>

                {/* Problem-Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                      Problem
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                {project.impact && (
                  <div className="mb-8 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                      Impact
                    </h4>
                    <p className="text-foreground font-medium">
                      {project.impact}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-sm rounded-full bg-secondary/10 text-foreground border border-secondary/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Links */}
                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded transition-colors"
                    >
                      View Case Study →
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium border border-border hover:bg-secondary/5 rounded transition-colors"
                    >
                      View Source
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
