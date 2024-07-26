import React from "react";
import SVG from "@/libs/SVG";
import { motion } from "framer-motion";
import { PreloaderSildeUp } from "@/libs/anim/animate";
const Preloader = () => {
  return (
    <motion.div
      variants={PreloaderSildeUp}
      initial="init"
      exit={"exit"}
      className="redd fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-black"
    >
      <div className="flex h-full w-36 items-center justify-center tablet:w-full">
        <SVG />
      </div>
    </motion.div>
  );
};

export default Preloader;
