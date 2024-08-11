import React, { useRef } from "react";
import PlanCard from "@/components/ui/PlanCard";
import { plandetails } from "@/data/plandetails";
const PlanSection = () => {
  const PlanCont = useRef();
  return (
    <div
      id="plansection"
      className="flex min-h-screen flex-col laptop:flex-row px-5 w-screen items-center justify-center gap-10"
    >
      {plandetails.map((data, i) => {
        return <PlanCard ref={PlanCont} key={i} data={data} />;
      })}
    </div>
  );
};

export default PlanSection;
