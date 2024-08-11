import { motion, useTransform, useScroll } from "framer-motion";
import React from "react";
import Card from "@/components/ui/Card";
import { work } from "@/data/works";

const HorizantalScroll = ({ Ref_Container }) => {
  const { scrollYProgress } = useScroll({
    target: Ref_Container,
    layoutEffect: false,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["23%", "-23%"]);
  // const xmobile = useTransform(scrollYProgress, [0, 1], ["42%", "-42%"]);

  const FilterDemos = work.slice(0, 7);
  return (
    <div className="greenn sticky top-8 flex h-screen w-full items-center justify-center overflow-hidden px-32">
      <motion.div
        className="redd flex h-screen min-w-[425rem] items-center justify-center gap-10 p-10 tablet:min-w-[400rem] laptop:min-w-[410rem] desktop:min-w-[200rem]"
        style={{ x }}
      >
        {FilterDemos.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </motion.div>
    </div>
  );
};

export default HorizantalScroll;
