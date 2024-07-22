export const SvgVariant = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
export const PathVarient = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: { duration: 1 },
    ease: "easeInOut",
  },
};

export const PreloaderSildeUp = {
  init: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
