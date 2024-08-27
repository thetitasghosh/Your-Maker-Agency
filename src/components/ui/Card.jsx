"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Cursor from "@/components/ui/Cursor";
import Image from "next/image";
import { CardInViewVar } from "@/libs/anim/animate";
import { cn } from "@/libs/cn";
const Card = ({ data, className }) => {
  const Cardref = useRef(null);
  const { id } = data;
  // const IsInView = useInView(cardCont);
  // const [isMove, setIsMove] = useState(false);

  return (
    <div
      ref={Cardref}
      className={cn(
        "redd relative flex h-full w-[30rem] items-center justify-center p-1 text-4xl",
        className,
      )}
    >
      <motion.div
        // onMouseOver={() => setIsMove(true)}
        // onMouseLeave={() => setIsMove(false)}
        variants={CardInViewVar}
        initial="init"
        whileInView={"anim"}
        // custom={id}
        className="redd relative flex h-96 w-96 cursor-pointer flex-col items-center justify-center gap-1 rounded-md"
      >
        <div className="flex w-full items-center justify-center">
          <Image
            src={data.img}
            width={1000}
            height={500}
            className="redd w-full"
            alt="Your Maker Demo Poster"
          />
        </div>
        {/* <h1 className="w-full text-base">{info}</h1> */}
        {/* <Cursor isMove={isMove} /> */}
      </motion.div>
    </div>
  );
};

export default Card;
