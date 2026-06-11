"use client";

import { motion } from "framer-motion";
import { articles } from "@/lib/data";
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

export default function Articles() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="blog" className="w-full px-6 py-20 sm:px-8 md:px-12 lg:py-32">
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
            Articles & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technical articles, architectural insights, and engineering notes.
            Deep dives into DevOps, system design, and production best practices.
          </p>
        </motion.div>

        {/* Articles list */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
        >
          {sortedArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              className="group border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:bg-secondary/5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category and date */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary/10 text-muted-foreground border border-secondary/30">
                      {article.category}
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed mb-4">
                    {article.description}
                  </p>

                  {/* Read time */}
                  <p className="text-sm text-muted-foreground">
                    {article.readTime} min read
                  </p>
                </div>

                {/* Link arrow */}
                {article.link && (
                  <div className="flex-shrink-0 pt-2 md:pt-0">
                    <Link
                      href={article.link}
                      className="inline-flex items-center justify-center w-10 h-10 text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 transform group-hover:translate-x-1"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all articles CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200"
          >
            View All Articles
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
