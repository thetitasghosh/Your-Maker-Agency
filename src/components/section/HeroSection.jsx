"use client";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import React, { useLayoutEffect, useState } from "react";
import SplitType from "split-type";
import { cn } from "@/libs/cn";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  // useLayoutEffect(() => {
  //   const title = new SplitType(".split-text-yourmaker", {
  //     types: "lines",
  //   });
  //   const line = new SplitType(".split-text-sum", { types: "lines" });
  //   const ctx = gsap.context(() => {
  //     let tl = gsap.timeline({
  //       delay: 2,
  //     });
  //     tl.from(
  //       title.lines[0],
  //       {
  //         opacity: 0,
  //         y: "50%",
  //         filter: "blur(10px)",
  //       },
  //       "1",
  //     );
  //     tl.from(
  //       title.lines[1],
  //       {
  //         opacity: 0,
  //         y: "50%",
  //         filter: "blur(10px)",
  //       },
  //       "1",
  //     );
  //     tl.from(line.lines, {
  //       opacity: 0,
  //       y: "50%",
  //       filter: "blur(10px)",
  //     });
  //     tl.from(".Btn1", {
  //       opacity: 0,
  //       y: "50%",
  //       filter: "blur(10px)",
  //     });
  //     tl.from(".Btn2", {
  //       opacity: 0,
  //       y: "50%",
  //       filter: "blur(10px)",
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);
  return (
    <div className="redd flex min-h-screen w-screen items-center justify-evenly">
      <div className="redd flex h-full w-[50rem] flex-col items-center justify-center gap-12">
        <div className="redd flex h-fit w-full flex-col items-start justify-center gap-2 text-8xl uppercase">
          <h1 className="split-text-yourmaker font-bold text-yourMaker">
            wanna grow
          </h1>
          <h1 className="split-text-yourmaker font-light">your business</h1>
        </div>
        <div className="w-full capitalize">
          <h1 className="split-text-sum text-5xl">we are here for you</h1>
        </div>
        <div className="reddd flex w-full items-center justify-start gap-5">
          <button className="Btn1 rounded-xl bg-yourMaker p-1 px-3 font-semibold text-white">
            See Plans
          </button>
          <button
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            className="Btn2 flex items-center justify-center gap-2 rounded-xl border border-yourMaker p-1 px-3 text-yourMaker"
          >
            Contact
            <FaArrowRight
              className={cn("transition-all opacity-5 duration-500", {
                // block: hover,
                "opacity-100": hover,
                "-rotate-45": hover,
              })}
            />
          </button>
        </div>
      </div>
      <div className="redd h-96 w-96"></div>
    </div>
  );
};

export default HeroSection;
