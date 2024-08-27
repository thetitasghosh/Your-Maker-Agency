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
          end: "bottom 70%",
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
      <p className="redd split-text-p text-2xl font-normal tablet:text-3xl laptop:text-4xl desktop:text-6xl">
        Hi This is <span className="relative">&quot; Your Maker &quot;</span> a
        Digital Marketing Agency in Badkulla, Nadia, West Bengal. We work with
        integrity. We believe in our
        {/* <br /> */}
        honesty and work, not to convince anyone with fake commitment. We work
        as a team with our client with our full effort.
      </p>
    </div>
  );
};

function Svg() {
  return (
    <>
      <svg
        width="551"
        height="209"
        viewBox="0 0 551 209"
        // fill="none"
        className="absolute left-0 top-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M130.5 49.5C131.552 38.9756 150.269 40.1063 158 36.4444C183.516 24.3578 206.601 17.422 234.944 14.5C278.497 10.0101 322.731 12 366.472 12C415.445 12 474.711 16.2975 518.833 40.0555C557.551 60.9037 557.178 115.044 527.861 144.361C502.405 169.817 460.46 183.998 426.611 193.111C377.968 206.207 332.044 207 282.167 207C194.617 207 111.637 195.301 37.7221 144.222C6.04372 122.331 -13.7774 76.8328 18.2777 44.7778C35.6478 27.4076 65.7072 19.8368 88.8333 14.5C146.296 1.23925 202.332 1.99998 261.055 1.99998C309.322 1.99998 357.927 -0.222808 405.778 7.13887C431.543 11.1027 459.305 19.5 485.5 19.5"
          stroke="#EA580C"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
}
export default TextReveal;
