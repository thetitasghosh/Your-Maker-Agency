"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const cont = useRef();
  useEffect(() => {
    let aboutp = new SplitType(".split-text-p", { types: "chars" });
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: cont.current,
          start: "top 70%",
          end: "bottom 60%",
          // markers: true,
          scrub: true,
        },
      });

      tl.from(aboutp.chars, {
        opacity: 0.1,
        stagger: { amount: 10, from: "start" },
      });
    });
    return () => ctx.revert();
  });
  return (
    <div ref={cont} className="h-full w-full">
      <p className="redd split-text-p text-6xl font-normal">
        Hi This is &quot;Your Maker&quot; a Digital Marketing Agency in
        Badkulla, Nadia, West Bengal. We work with integrity. We believe in our
        {/* <br /> */}
        honesty and work, not to convince anyone with fake commitment. We work
        as a team with our client with our full effort.
      </p>
    </div>
  );
};

export default TextReveal;
