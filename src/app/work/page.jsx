"use client";
import React, { useState } from "react";
import { work } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BorderBottomV } from "@/libs/anim/animate";
const WorkPage = () => {
  const [frame, setFrame] = useState({ active: false, index: 0 });
  return (
    <div className="flex-sc min-h-screen gap-5 p-10">
      <div className="redd flex h-fit w-full flex-col items-center justify-center gap-5">
        {work.map((data, index) => {
          return (
            <ListItem
              key={index}
              index={index}
              setFrame={setFrame}
              data={data}
            />
          );
        })}
      </div>
      <div className="red h-96 w-96">
        {/* {work.map((data) => {
          const { index } = frame;
          return (
            <div key={index}>
              <Image
                src={data.img}
                alt="Yourmaker "
                width={500}
                height={0}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default WorkPage;

function ListItem({ data, index, setFrame }) {
  const { info, id } = data;
  return (
    <div
      // onMouseEnter={() => setFrame({ active: true, index })}
      // onMouseLeave={() => setFrame({ active: false, index })}
      className="relative flex h-fit w-full cursor-pointer items-center justify-between px-10"
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
