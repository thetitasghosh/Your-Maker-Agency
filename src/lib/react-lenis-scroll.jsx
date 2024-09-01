"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
const LenisScroll = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisScroll;
