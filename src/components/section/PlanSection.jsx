import React from "react";
import PlanCard from "@/components/ui/PlanCard";
import { plandetails } from "@/data/plandetails";
const PlanSection = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-10">
      {plandetails.map((data, i) => {
        return <PlanCard key={i} data={data} />;
      })}
    </div>
  );
};

export default PlanSection;
