"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full px-6 py-24 sm:px-8 md:px-12 lg:py-32">
      <motion.div
        className="mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Penjy
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            Software Engineer & DevOps Builder
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
          <p className="text-lg sm:text-xl text-foreground leading-relaxed">
            I build scalable systems and polished digital experiences. Specialized in backend architecture, DevOps automation, and full-stack engineering. Currently focused on production-grade infrastructure and developer tooling.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 ease-out hover:shadow-lg hover:shadow-primary/20"
          >
            View Projects
            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground border border-border hover:bg-secondary/10 rounded-lg transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-24 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
