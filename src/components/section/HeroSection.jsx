"use client";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import SplitType from "split-type";

const HeroSection = () => {
  useLayoutEffect(() => {
    const YM_title = new SplitType(".split-text-yourmaker", {
      types: "words",
    });
    const YM_line = new SplitType(".split-text-line", { types: "lines" });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 2,
      });
      tl.from(
        YM_title.words[0],
        {
          y: "200%",
          duration: 0.5,
        },
        "1",
      );
      tl.from(
        YM_title.words[1],
        {
          y: "-200%",
          duration: 0.5,
        },
        "1",
      );

      tl.from(YM_line.lines, { y: "200%", stagger: { amount: 0.1 } });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="redd flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="redd flex h-full w-full items-end justify-center">
        <h1
          className="split-text-yourmaker flex-center redd h-fit w-full overflow-hidden text-[3.5rem] font-bold text-orange-600 tablet:text-8xl laptop:text-9xl desktop:text-[10rem]"
          // style={{ transform: "translateY(120px)" }}
        >
          YOUR MAKER
        </h1>
      </div>
      <div className="redd flex h-96 w-full items-center justify-end pr-10">
        <div className="redd flex h-full w-fit flex-col items-center gap-2 p-5 text-xl tablet:text-2xl laptop:text-3xl desktop:text-4xl">
          <h1 className="split-text-line redd flex w-full items-center justify-start overflow-hidden desktop:w-[50rem]">
            Wanna Grow Your Bussiness
          </h1>
          <h1 className="split-text-line redd flex w-full items-end justify-center overflow-hidden">
            We Are Here For You
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
