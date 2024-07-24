"use client";
import React, { useRef } from "react";
import HorizantalScroll from "./HorizantalScroll";
import { work } from "@/data/works";
const WorkSection = () => {
  const container = useRef();
  return (
    <div
      ref={container}
      className="red relative flex h-[200vh] w-screen flex-col items-center justify-start"
    >
      <h1 className="p-2 text-5xl">
        PROJECTS <sup>( {work.length} )</sup>{" "}
      </h1>
      <HorizantalScroll Ref_Container={container} />
    </div>
  );
};

export default WorkSection;
