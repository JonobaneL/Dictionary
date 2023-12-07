export const advantagesVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      durathion: 0.2,
      delay: 0.25 * index,
    },
  }),
};
