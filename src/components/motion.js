export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 16,
      mass: 0.75,
    },
  },
}

export const fadeUp = revealUp

export const springInView = revealUp

export const staggerSoft = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
}

export const stagger = staggerSoft

export const maskReveal = {
  hidden: { y: '110%' },
  visible: (i = 0) => ({
    y: '0%',
    transition: {
      duration: 0.9,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}
