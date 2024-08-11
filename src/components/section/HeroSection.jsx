"use client";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import React, { useLayoutEffect, useState } from "react";
import SplitType from "split-type";
import { cn } from "@/libs/cn";
import Link from "next/link";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  useLayoutEffect(() => {
    const title = new SplitType(".split-text-yourmaker", {
      types: "lines",
    });
    const line = new SplitType(".split-text-sum", { types: "lines" });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 2,
      });
      tl.from(
        title.lines[0],
        {
          opacity: 0,
          y: "50%",
          filter: "blur(10px)",
        },
        "1",
      );
      tl.from(
        title.lines[1],
        {
          opacity: 0,
          y: "50%",
          filter: "blur(10px)",
        },
        "1",
      );
      tl.from(line.lines, {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from(".Btn1", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from(".Btn2", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="redd mt-10 flex min-h-screen w-screen flex-col items-center justify-evenly laptop:flex-row">
      <div className="redd flex h-full w-fit flex-col items-center justify-center gap-12 desktop:w-[50rem]">
        <div className="redd flex h-fit w-full flex-col items-center justify-center gap-2 text-5xl uppercase laptop:items-start laptop:text-7xl desktop:text-8xl">
          <h1 className="split-text-yourmaker font-bold text-yourMaker">
            wanna grow
          </h1>
          <h1 className="split-text-yourmaker font-light">your business</h1>
        </div>
        <div className="flex w-full items-center justify-center capitalize laptop:justify-start">
          <h1 className="split-text-sum laptop:text-4xl desktop:text-5xl">
            we are here for you
          </h1>
        </div>
        <div className="reddd flex w-full items-center justify-start gap-5 laptop:items-center">
          <button className="Btn1 rounded-xl bg-yourMaker p-1 px-3 font-semibold text-white">
            <Link href={"#plansection"}>See Plans</Link>
          </button>
          <button
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            className="Btn2 flex items-center justify-center gap-2 rounded-xl border border-yourMaker p-1 px-3 text-yourMaker"
          >
            <Link
              className="flex items-center justify-center gap-2"
              href={"/contact"}
            >
              Contact
              <FaArrowRight
                className={cn("transition-all duration-500", {
                  // block: hover,
                  // "opacity-100": hover,
                  "-rotate-45": hover,
                })}
              />
            </Link>
          </button>
        </div>
      </div>
      <div className="redd h-96 w-96"></div>
    </div>
  );
};

export default HeroSection;
