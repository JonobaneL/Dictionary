export const levelVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2 * index,
    },
  }),
};
