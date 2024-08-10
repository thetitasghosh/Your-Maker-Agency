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

export const CardInViewVar = {
  init: {
    width: "5rem",
    height: "5rem",
    filter: "blur(8px)",
  },
  anim: {
    width: "24rem",
    height: "24rem",
    filter: "blur(0px)",
    transition: {
      // delay: 0.1 * id,
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};
export const NavbarVarient = {
  init: {
    width: "0rem",
    height: "98vh",

    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  anim: {
    width: "22rem",
    height: "98vh",

    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

export const NavbarItem = {
  init: {
    translateX: 200,
  },
  anim: (i) => ({
    translateX: 0,
    transition: {
      duration: 0.56,
      delay: 0.2 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i) => ({
    translateX: 200,
    transition: {
      duration: 0.5,
      delay: 0.1 * i,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};
export const StaggerOpacity = {
  init: {
    opacity: 0,
    // y: "0%",
  },
  anim: (id) => ({
    opacity: 1,
    // y: "100%",
    transition: {
      duration: 0.75,
      delay: 0.2 * id,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};
