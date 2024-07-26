import React from "react";
import WorkList from "@/components/ui/WorkList";
import WorkSection from "@/components/section/WorkSection";
export const metadata = {
  title: "Works",
  description: "...",
};
const WorkPage = () => {
  return (
    <div className="w-full flex min-h-screen flex-col ">
      <h1 className="redd mt-20 text-3xl pl-5 tablet:text-5xl desktop:ml-20 desktop:text-5xl">
        Selected Demos
      </h1>
      <WorkSection />
    </div>
  );
};

export default WorkPage;
//
