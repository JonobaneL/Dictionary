export const popMenuVariants = {
  visible: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
  },
  hidden: {
    clipPath: "inset(95% 95% 0 0 round 10px)",
  },
};
export const popContentVariants = {
  visible: (delay: number) => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        delay: 0.1 * delay,
      },
    };
  },
  hidden: {
    opacity: 0,
    x: -10,
    transition: {
      delay: 0,
    },
  },
};
