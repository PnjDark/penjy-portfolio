// src/lib/brand.ts - Simple exports, no namespace confusion

export const easing = {
  confident: [0.22, 1, 0.36, 1],
  subtle: [0.4, 0, 0.2, 1],
  exit: [0.4, 0, 1, 1]
} as const;

export const durations = {
  fast: 120,
  normal: 180,
  medium: 240,
  slow: 300
} as const;

export const transforms = {
  liftSm: -1,
  liftMd: -2,
  press: 0.98
} as const;

export const constraints = {
  maxScale: 1.05,
  maxRotate: 5
} as const;

// For convenience, but use direct exports above
export const motion = {
  easing,
  durations,
  transforms,
  constraints
} as const;