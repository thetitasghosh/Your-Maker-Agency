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
      className="red fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-orange-600"
    >
      <div className="flex h-full w-full items-center justify-center">
        <SVG />
      </div>
    </motion.div>
  );
};

export default Preloader;
