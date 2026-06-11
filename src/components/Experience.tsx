"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="w-full px-6 py-20 sm:px-8 md:px-12 lg:py-32">
      <motion.div
        className="mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-balance mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A track record of building scalable systems, leading teams, and
            delivering impactful solutions across various industries and scales.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-12 relative"
          variants={containerVariants}
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:flex hidden" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center md:translate-x-1/2 -translate-x-1/2">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>

              {/* Content - alternate left/right */}
              <div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right"
                    : "md:pl-8 md:col-start-2"
                }`}
              >
                <div className="border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Period badge */}
                  <div className="inline-block mb-3 px-3 py-1 text-xs font-mono text-muted-foreground bg-secondary/10 border border-secondary/30 rounded">
                    {exp.period}
                  </div>

                  {/* Company and title */}
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground text-sm"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
