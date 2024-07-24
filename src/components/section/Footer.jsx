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
        stagger: { amount: 1, from: "end" },
      });
    });
    return () => gsapctx.revert();
  });
  return (
    <footer
      ref={FooterRef}
      className="redd flex h-96 w-full flex-col items-center justify-start bg-yourMaker py-10"
    >
      <div>
        <h1 className="split-text-footer redd overflow-hidden text-5xl font-extrabold tablet:text-8xl desktop:text-9xl">
          YOURMAKER
        </h1>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
