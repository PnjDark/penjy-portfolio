// src/lib/motion.ts - SIMPLE FIX
export const prefersReducedMotion = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 0 }
};

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // 300ms
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2, // 200ms
      ease: "easeIn"
    }
  }
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const skillButtonVariants = {
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  }
};