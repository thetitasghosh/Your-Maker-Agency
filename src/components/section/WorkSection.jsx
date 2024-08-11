"use client";
import React, { useLayoutEffect, useRef } from "react";
import HorizantalScroll from "./HorizantalScroll";
import { work } from "@/data/works";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
const WorkSection = ({ title, Intro }) => {
  const container = useRef();
  useLayoutEffect(() => {
    let tilte = new SplitType(".title", {
      types: "chars",
    });
    // let num = new SplitType(".num", {
    //   types: "chars",
    // });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "10% 70%",
          // markers: true,
          scrub: true,
        },
      });
      tl.from(
        tilte.chars,
        {
          duration: 1.4,
          y: "200%",
          stagger: { amount: 1.8 },
          // transition: "1s linear",
        },
        // "1",
      );
      tl.from(
        ".num",
        {
          delay: 1.8,
          top: "200%",
          // stagger: { amount: 0.5 },
        },
        // "1",
      );
    });
    return () => ctx.revert();
  });
  return (
    <div
      ref={container}
      className="redd relative flex h-[200vh] w-screen flex-col items-center justify-start"
    >
      {title === "INDEX" ? (
        <div className="flex gap-2 overflow-hidden p-2 text-4xl transition-all duration-700 laptop:text-5xl desktop:text-8xl">
          <h1 className="title overflow-hidden"> FEATURED DEMOS</h1>{" "}
          <sup className="num mt-11">( {work.length} )</sup>{" "}
        </div>
      ) : null}
      <HorizantalScroll Ref_Container={container} />
    </div>
  );
};

export default WorkSection;
