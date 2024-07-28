"use client";
import gsap from "gsap";
import { Social, navigation } from "@/data/navigation";
import { Serviecs } from "@/data/services";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const FooterRef = useRef();
  // useLayoutEffect(() => {
  //   // splitext class
  //   const FooterTitle = new SplitType(".split-text-footer", { types: "chars" });
  //   // gsap code here
  //   let gsapctx = gsap.context(() => {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: FooterRef.current,
  //         start: "top bottom",
  //         end: "bottom bottom",
  //         // markers: true,
  //         scrub: true,
  //       },
  //     });
  //     tl.from(FooterTitle.chars, {
  //       y: "-100%",
  //       stagger: { amount: 0.85, from: "edges" },
  //     });
  //   });
  //   return () => gsapctx.revert();
  // });
  return (
    <footer
      ref={FooterRef}
      className="reddd flex min-h-[35rem] w-full flex-col-reverse items-end justify-center bg-yourMaker"
    >
      <div className="redd flex h-24 w-full items-center justify-center laptop:h-36 desktop:h-72">
        {/* tablet:h-32 tablet:text-[7rem] laptop:h-44 laptop:text-[9.8rem] desktop:h-72 desktop:text-[16.6rem] */}
        <h1 className="split-text-footer redd h-full overflow-hidden text-[4rem] font-bold tablet:text-[7.3rem] laptop:text-[9.5rem] desktop:text-[16.5rem]">
          YOURMAKER
        </h1>
      </div>
      <div className="redd flex min-h-96 w-full flex-wrap items-center justify-between px-10">
        <div className="redd flex h-96 w-96 flex-col items-center justify-center gap-10">
          <h1 className="text-6xl">Contact with us?</h1>
          <h1 className="border-b-2 text-3xl uppercase mx-10">
            <Link href={""}>yourmaker.in@gmail.com</Link>
          </h1>
        </div>
        <div className="redd h-96 w-96 py-10">
          <h1 className="border-b-2 uppercase">navigation</h1>
          <div className="flex h-full w-full flex-col items-start justify-start gap-2 py-2 pl-5">
            {navigation.map((data) => {
              return (
                <Link key={data.id} href={data.route}>
                  {data.lable}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="redd h-96 w-96 py-10">
          <h1 className="border-b-2 uppercase">services</h1>
          <div className="flex h-full w-full flex-col items-start justify-start gap-2 py-2 pl-5">
            {Serviecs.map((data) => {
              return (
                <Link key={data.id} href={""}>
                  {data.service}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="redd h-96 w-96 py-10">
          <h1 className="border-b-2 uppercase">social media</h1>
          <div className="flex h-full w-full flex-col items-start justify-start gap-2 py-2 pl-5">
            {Social.map((data) => {
              return (
                <Link key={data.id} href={""}>
                  {data.social}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
