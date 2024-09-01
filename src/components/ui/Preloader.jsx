import React from "react";
import SVG from "@/lib/SVG";
import { motion } from "framer-motion";
import { PreloaderSildeUp } from "@/lib/anim/animate";
const Preloader = () => {
  return (
    <motion.div
      variants={PreloaderSildeUp}
      initial="init"
      exit={"exit"}
      className="redd fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-black"
    >
      <div className="redd flex h-full w-48 items-center justify-center">
        {/* <h1 className="red">YOUR</h1> */}
        <SVG />
        {/* <h1 className="red">MAKER</h1> */}
      </div>
    </motion.div>
  );
};

export default Preloader;
