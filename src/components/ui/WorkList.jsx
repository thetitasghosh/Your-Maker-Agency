"use client";
import React, { useState } from "react";
import { work } from "../../data/works";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { BorderBottomV } from "../../lib/anim/animate";

const WorkList = () => {
  const [frame, setFrame] = useState(0);

  let filterImage = work.filter((item) => item.id === frame);
  return (
    <div className="redd flex h-screen w-full items-center justify-center">
      <div className="redd w-full">
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
      <div className="redd relative z-[55] m-5 h-96 w-96 transition-all duration-500">
        <Frame filterImage={filterImage} />
        {frame === 0 ? (
          <div className="absolute left-0 top-0 z-[55] flex h-full w-full items-center justify-center bg-yourMaker">
            <h1>We Are Making</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export function Frame({ filterImage }) {
  return filterImage.map((item) => {
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
  });
}

function ListItem({ data, setFrame }) {
  const HandleState = (id) => {
    setFrame(id);
  };
  const { info, id } = data;
  return (
    <div
      onMouseEnter={() => HandleState(id, false)}
      onMouseLeave={() => HandleState(0, true)}
      className={cn(
        "redd relative flex h-10 w-full cursor-pointer items-center justify-between px-10 text-stone-400 transition-all duration-500 hover:px-16 hover:text-white",
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

export default WorkList;
