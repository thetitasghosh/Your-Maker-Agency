"use client";
import React, { useRef } from "react";
import HorizantalScroll from "./HorizantalScroll";
const WorkSection = () => {
  const container = useRef(null);
  return (
    <div
      ref={container}
      className="redd flex h-[200vh] w-screen flex-col items-center justify-start"
    >
      <h1 className="p-2 text-5xl">PROJECTS</h1>
      <HorizantalScroll Ref_Container={container} />
    </div>
  );
};

export default WorkSection;
