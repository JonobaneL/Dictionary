export const categoryVariants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ index, delayIndex }: { index: number; delayIndex: number }) => ({
    opacity: 1,
    transition: {
      delay: (index - delayIndex) * 0.1,
    },
  }),
};
