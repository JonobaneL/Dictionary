export const drawCircle = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (path: number) => {
    return {
      pathLength: path,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    };
  },
};
