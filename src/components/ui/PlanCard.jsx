import { cn } from "@/libs/cn";
import React from "react";

const PlanCard = ({ data }) => {
  return (
    <div
      style={{ backgroundColor: data.bgColor }}
      className={cn(
        "flex h-[30rem] w-96 flex-col items-center justify-center gap-5 rounded-2xl border border-orange-700 p-2 px-3",
        { "h-[35rem] w-[25rem]": data.plan === "Gold" },
      )}
    >
      <div className="planTitle h-20 w-full">
        <h1>{data.plan}</h1>
        <h1>{data.price}/Monthly</h1>
        <p>{data.desc}</p>
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
    </div>
  );
};

export default PlanCard;
