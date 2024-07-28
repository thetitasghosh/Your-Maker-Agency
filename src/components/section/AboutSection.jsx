import {
  motion,
  useScroll,
  useTransform,
  useAnimate,
  inView,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const ContainerRef = useRef();
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ContainerRef.current,
  //         start: "top 50%",
  //         end: "bottom 50%",
  //         markers: true,
  //         scrub: true,
  //       },
  //     });
  //     tl.from(
  //       ".line_1",
  //       {
  //         x: "-180%",
  //         // transition:{}
  //       },
  //       "1",
  //     );
  //     tl.from(
  //       ".line_2",
  //       {
  //         x: "180%",
  //         // transition:{}
  //       },
  //       "1",
  //     );
  //   });
  //   return () => ctx.revert();
  // });
  // const [scope, animate] = useAnimate();
  // useLayoutEffect(() => {
  //   inView(".desig", ({ elm }) => {
  //     animate(elm, { y: "100%" });
  //   });
  // });
  const { scrollYProgress } = useScroll({
    target: ContainerRef,
    offset: ["start end", "start 30%"],
    layoutEffect: false,
  });
  const xleft = useTransform(scrollYProgress, [0, 1], [-550, 0]);
  const xright = useTransform(scrollYProgress, [0, 1], [550, 0]);
  return (
    <div
      ref={ContainerRef}
      className="redd  border-t-2 flex h-96 w-full flex-col items-center justify-start gap-5 py-20"
    >
      <div className="redd flex w-full items-center justify-center gap-3 text-2xl font-bold text-yourMaker tablet:text-5xl laptop:text-6xl desktop:text-7xl">
        <motion.h1 style={{ x: xleft }} className="line_1">
          THINKING OF
        </motion.h1>
        <motion.h1 style={{ x: xright }} className="line_2">
          YOUR GROWTH
        </motion.h1>
      </div>
      <div
        // ref={scope}
        className="text-xl font-light tablet:text-4xl laptop:text-5xl redd overflow-hidden"
      >
        <motion.h1
          initial={{
            y: "100%",
          }}
          whileInView={{
            y: "0",
            transition: {
              duration: .5,
              delay: .3,
            },
          }}
          className="desig reds overflow-hidden py-2"
        >
          A Digital Marketing Agency
        </motion.h1>
      </div>
      <div>
        <button className="rounded-3xl border border-yourMaker p-2 px-5">
          Our Services
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
