"use client";
import React, { useState } from "react";
import { work } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BorderBottomV } from "@/libs/anim/animate";
import { cn } from "@/libs/cn";
// export const metadata = {
//   title: "Works",
//   description: "...",
// };
const WorkPage = () => {
  const [frame, setFrame] = useState(0);
  // const [hover, setHover] = useState(false);

  let filterImage = work.filter((item) => item.id === frame);
  return (
    <div className="flex-sc min-h-screen gap-5 p-10">
      <div className="redd flex h-fit w-full flex-col items-center justify-center">
        {work.map((data, index) => {
          return (
            <ListItem
              // setHover={setHover}
              // hover={hover}
              key={index}
              index={index}
              setFrame={setFrame}
              data={data}
            />
          );
        })}
      </div>
      <div className="redd relative z-[55] m-5 h-96 w-96 transition-all duration-500">
        {filterImage.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.img}
              width={500}
              height={0}
              alt="yourmaker"
              className="z-[999] h-full w-full"
            />
          );
        })}
        {frame === 0 ? (
          <div className="absolute left-0 top-0 z-[55] flex h-full w-full items-center justify-center bg-yourMaker">
            <h1>We Are Making</h1>
          </div>
        ) : (
          ""
        )}
        {/* <motion.div
          variants={ImagePlaceHolderSlideUp}
          initial="init"
          animate={hover ? "anim" : "init"}
          // exit={"exit"}
          className="absolute left-0 top-0 z-[55] h-full w-full bg-yourMaker"
        /> */}
      </div>
    </div>
  );
};

export default WorkPage;
function ListItem({ data, setFrame, setHover, hover }) {
  const HandleState = (id) => {
    setFrame(id);
    // setHover(hover == state);
    // console.log(hover, id);
  };
  const { info, id } = data;
  return (
    <div
      onMouseEnter={() => HandleState(id, false)}
      onMouseLeave={() => HandleState(0, true)}
      className={cn(
        "redd relative flex h-10 w-full cursor-pointer items-center justify-between px-10 transition-all duration-500 hover:px-16",
      )}
    >
      <Link href={""}>{info}</Link>
      <h2>Yourmaker</h2>
      <motion.div
        variants={BorderBottomV}
        initial="init"
        whileInView={"anim"}
        custom={id}
        viewport={{
          once: true,
        }}
        className="absolute -bottom-1 left-0 mx-10 h-[0.1rem] bg-white"
      />
    </div>
  );
}
