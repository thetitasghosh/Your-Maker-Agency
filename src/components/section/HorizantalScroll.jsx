import { motion, useTransform, useScroll } from "framer-motion";
import React, { useLayoutEffect } from "react";
import Card from "@/components/ui/Card";
import { work } from "@/data/works";

const HorizantalScroll = ({ Ref_Container }) => {
  
  const { scrollYProgress } = useScroll({
    target: Ref_Container,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  // const xmobile = useTransform(scrollYProgress, [0, 1], ["42%", "-42%"]);

  return (
    <div className="green sticky top-20 flex h-screen w-full items-center justify-center overflow-hidden px-32">
      <motion.div
        className="red flex h-screen min-w-[280rem] items-center justify-end gap-5 p-10 laptop:min-w-[260rem] desktop:min-w-[200rem]"
        style={{ x }}
      >
        {work.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </motion.div>
    </div>
  );
};

export default HorizantalScroll;
