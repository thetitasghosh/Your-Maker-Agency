"use client";
import { cn } from "@/lib/utils";
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
        "flex h-[35rem] w-auto flex-col items-center justify-center gap-5 rounded-2xl border border-orange-700 p-2 px-3",
        {
          "h-[40rem] w-[28rem]": GoldPlan,
          "": GoldPlan,
        },
      )}
    >
      <div className="planTitle h-20 w-full space-y-1">
        <h1
          style={{ color: GoldPlan ? "white" : "" }}
          className="w-fit rounded-xl border p-2 px-3 text-2xl font-bold text-yourMaker"
        >
          {data.plan} Plan
        </h1>
        <h1 className="pl-3 text-2xl">
          <span className="font-bold">₹ {data.price}</span> / Month
        </h1>
        <p className="border-b pl-3"></p>
      </div>
      <div className="planItem mb-1 mt-5 flex h-full w-full flex-col items-center justify-center gap-2 font-medium">
        <ul className="space-y-1">
          <li>⨀ {data.benifits1}</li>
          <li>⨀ {data.benifits2}</li>
          <li>⨀ {data.benifits3}</li>
          <li>⨀ {data.benifits4}</li>
          <li>⨀ {data.benifits5}</li>
          <li>⨀ {data.benifits6}</li>
          <li>⨀ {data.benifits7}</li>
          <li>⨀ {data.benifits8}</li>
          <li>⨀ {data.benifits9}</li>
          <li>⨀ {data.benifits10}</li>
          <li>⨀ {data.benifits11}</li>
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
        <p className="text-xl font-medium">Discuss & Buy</p>
      </div>
    </motion.div>
  );
};

export default PlanCard;
