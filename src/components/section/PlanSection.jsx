import React, { useRef } from "react";
import PlanCard from "@/components/ui/PlanCard";
import { plandetails } from "@/data/plandetails";
const PlanSection = () => {
  const PlanCont = useRef();
  return (
    <div
      id="plansection"
      className="flex min-h-screen w-screen flex-col items-center justify-center gap-20 px-5"
    >
      <div className="redd h-20 w-full flex items-center justify-center">
        <h1 className="text-5xl uppercase">Our Plans</h1>
      </div>
      <div className="flex h-full flex-col laptop:flex-row w-full items-center justify-center gap-5">
        {plandetails.map((data, i) => {
          return <PlanCard ref={PlanCont} key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default PlanSection;
