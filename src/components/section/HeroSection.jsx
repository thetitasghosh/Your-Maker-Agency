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
        delay: 1.5,
      });
      tl.from(
        YM_title.words[0],
        {
          y: "200%",
          // scale: 0.5,
          duration: 0.5,
        },
        "1",
      );
      tl.from(
        YM_title.words[1],
        {
          y: "-200%",
          // scale: 0.5,
          duration: 0.5,
        },
        "1",
      );
      tl.from(
        YM_title.words[0],
        {
          scale: 1.5,
        },
        "2",
      );
      tl.from(
        YM_title.words[1],
        {
          scale: 1.5,
        },
        "2",
      );
      tl.from(YM_line.lines, { y: "200%", stagger: { amount: 0.1 } });
      tl.from(".Btn", {
        opacity: 0,
        stagger: { amount: 0.5 },
      });
      tl.from(".Qs", {
        y: "150%",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="redd flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="redd flex h-full w-full items-end justify-center">
        <p
          className="split-text-yourmaker redd flex h-fit w-full items-center justify-center overflow-hidden text-[3.5rem] font-bold text-orange-600 tablet:text-8xl laptop:text-9xl desktop:text-[10rem]"
          // style={{ transform: "translateY(120px)" }}
        >
          YOUR MAKER
        </p>
      </div>
      <div className="redd flex h-96 w-full flex-col items-start justify-center">
        <div className="redd flex h-fit w-full flex-col items-center justify-center gap-2 p-5 text-2xl tablet:text-2xl laptop:text-3xl desktop:text-5xl">
          <h1 className="split-text-line redd flex w-fit items-center justify-center overflow-hidden pl-8 tablet:pl-20  tablet:px-10">
            Wanna Grow Your Bussiness
            <span className="Qs redd block h-fit w-8 select-none overflow-hidden">
              ?
            </span>
          </h1>
          <h1 className="split-text-line redd flex w-fit items-end justify-center overflow-hidden">
            We Are Here For You
          </h1>
        </div>
        <div className="redd flex h-full w-full items-center justify-center gap-20 font-semibold">
          <button className="Btn rounded-2xl bg-yourMaker p-2 px-5">
            See Plans
          </button>
          <button className="Btn rounded-2xl border border-yourMaker p-2 px-5 text-yourMaker">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
