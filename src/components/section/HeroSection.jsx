"use client";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import SplitType from "split-type";

const HeroSection = () => {
  useLayoutEffect(() => {
    const YM_title = new SplitType(".split-text-yourmaker", {
      types: "chars",
    });
    const YM_line = new SplitType(".split-text-line", { types: "lines" });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 2,
      });
      tl.from(YM_title.chars, {
        y: "200%",
        stagger: { amount: 0.9 },
      });
      tl.from(YM_line.lines, { y: "200%", stagger: { amount: 0.1 } });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="redd flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="redd flex h-full w-full items-end justify-center">
        <h1
          className="split-text-yourmaker flex-center redd h-fit overflow-hidden text-6xl font-extrabold tablet:text-8xl laptop:text-9xl desktop:text-[10rem]"
          // style={{ transform: "translateY(120px)" }}
        >
          YOURMAKER
        </h1>
      </div>
      <div className="redd flex h-full w-full items-center justify-end pr-10">
        <div className="flex items-end redd laptop:text-3xl desktop:text-4xl h-full w-fit  tablet:text-2xl flex-col gap-2 p-5 text-xl">
          <h1 className="split-text-line  redd desktop:w-[50rem] flex items-center justify-center w-full overflow-hidden">
            Bridging the gap between now and next with
          </h1>
          <h1 className="split-text-line  redd w-full overflow-hidden">
            strategic innovation in design and technology
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
