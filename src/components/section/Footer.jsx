"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const FooterRef = useRef();
  useLayoutEffect(() => {
    // splitext class
    const FooterTitle = new SplitType(".split-text-footer", { types: "chars" });
    // gsap code here
    let gsapctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: FooterRef.current,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: true,
        },
      });
      tl.from(FooterTitle.chars, {
        y: "-100%",
        stagger: { amount: 0.85, from: "edges" },
      });
    });
    return () => gsapctx.revert();
  });
  return (
    <footer
      ref={FooterRef}
      className="red flex h-96 w-full flex-col items-center justify-end bg-yourMaker"
    >
      <div className="flex w-full items-center justify-center">
        <h1 className="split-text-footer redd overflow-hidden text-5xl font-bold tablet:text-8xl desktop:text-[16rem]">
          YOURMAKER
        </h1>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
