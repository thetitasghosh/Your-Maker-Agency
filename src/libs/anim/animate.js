export const SvgVariant = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
export const PathVarient = {
  hidden: {
    strokeWidth: 18,
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

export const BorderBottomV = {
  init: {
    width: "0%",
  },
  anim: (id) => ({
    width: "95%",
    transition: {
      delay: 0.1 * id,
      duration: 0.78,
      ease: "easeInOut",
    },
  }),
};

export const ImagePlaceHolderSlideUp = {
  init: {
    height: "100%",
  },
  anim: {
    height: "0%",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  exit: {
    height: "100%",
    // bottom: 0,
    top: 0,
    left: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
