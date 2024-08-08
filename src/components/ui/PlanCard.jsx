"use client";
import { cn } from "@/libs/cn";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

const PlanCard = ({ data, ref }) => {
  let { plan } = data;
  let Gold = plan;
  let GoldPlan = Gold === "Gold";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });
  let yparalax = useTransform(scrollYProgress, [0, 1], [150, -80]);
  return (
    <motion.div
      style={{ backgroundColor: data.bgColor, y: GoldPlan ? "" : yparalax }}
      className={cn(
        "flex h-[30rem] w-96 flex-col items-center justify-center gap-5 rounded-2xl border border-orange-700 p-2 px-3",
        { "h-[35rem] w-[25rem]": GoldPlan },
      )}
    >
      <div className="planTitle h-20  w-full ">
        <h1 className="w-fit rounded-xl border p-1 px-2">{data.plan}</h1>
        <h1 className="text-xl">
          <span className="font-bold">{data.price}</span> /Monthly
        </h1>
        <p className="border-b">{data.desc}</p>
      </div>
      <div className="planItem flex h-full w-full flex-col items-center justify-center gap-2">
        <ul>
          <li>⨀ {data.benifits1}</li>
          <li>⨀ {data.benifits2}</li>
          <li>⨀ {data.benifits3}</li>
          <li>⨀ {data.benifits4}</li>
          <li>⨀ {data.benifits5}</li>
        </ul>
      </div>
      <div
        className={cn(
          "mb-5 flex h-16 w-[95%] cursor-pointer items-center justify-center rounded-xl bg-yourMaker text-white",
          {
            "bg-white": GoldPlan,
            "text-black": GoldPlan,
          },
        )}
      >
        <p className="text-xl font-medium">Check Out</p>
      </div>
    </motion.div>
  );
};

export default PlanCard;
