"use client";
import React, { useRef } from "react";
import HorizantalScroll from "./HorizantalScroll";
import { work } from "@/data/works";
const WorkSection = ({ title,Intro }) => {
  const container = useRef();
  return (
    <div
      ref={container}
      className="redd relative flex h-[200vh] w-screen flex-col items-center justify-start"
    >
      {title === "INDEX" ? (
        <h1 className="p-2 text-5xl">
          DEMOS <sup>( {work.length} )</sup>{" "}
        </h1>
      ) : null}
      <HorizantalScroll Ref_Container={container} />
    </div>
  );
};

export default WorkSection;
