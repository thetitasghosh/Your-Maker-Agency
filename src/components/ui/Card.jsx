import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Cursor from "@/components/ui/Cursor";
import Image from "next/image";
const Card = ({ data }) => {
  const { info, img } = data;
  const Cardref = useRef(null);

  // const IsInView = useInView(cardCont);
  const [isMove, setIsMove] = useState(false);

  return (
    <div
      ref={Cardref}
      className="redd relative flex h-full w-[30rem] items-center justify-center p-1 text-4xl"
    >
      <div
        onMouseOver={() => setIsMove(true)}
        onMouseLeave={() => setIsMove(false)}
        className="redd relative flex h-96 w-96 cursor-pointer flex-col items-center justify-center gap-1 rounded-md"
      >
        <div className="flex w-full items-center justify-center">
          <Image
            src={img}
            width={1000}
            height={500}
            className="redd w-full"
            alt="Your Maker Demo Poster"
          />
        </div>
        {/* <h1 className="w-full text-base">{info}</h1> */}
        <Cursor isMove={isMove} />
      </div>
    </div>
  );
};

export default Card;
