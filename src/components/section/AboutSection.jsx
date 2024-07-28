import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: ContainerRef,
    offset: ["start end", "start 30%"],
  });
  const xleft = useTransform(scrollYProgress, [0, 1], [-550, 0]);
  const xright = useTransform(scrollYProgress, [0, 1], [550, 0]);
  return (
    <div
      ref={ContainerRef}
      className="redd flex h-96 w-full flex-col items-center gap-5 justify-start py-20"
    >
      <div className="redd flex w-full items-center justify-center gap-3 laptop:text-6xl desktop:text-7xl tablet:text-5xl text-2xl font-bold text-yourMaker">
        <motion.h1 style={{ x: xleft }} className="line_1">
          THINKING OF
        </motion.h1>
        <motion.h1 style={{ x: xright }} className="line_2">
          YOUR GROWTH
        </motion.h1>
      </div>
      <div className="laptop:text-5xl text-xl tablet:text-4xl font-light">
        <h1>A Digital Marketing Agency</h1>
      </div>
      <div>
        <button className=" border px-5 p-2 rounded-3xl border-yourMaker">Our Services</button>
      </div>
    </div>
  );
};

export default AboutSection;
