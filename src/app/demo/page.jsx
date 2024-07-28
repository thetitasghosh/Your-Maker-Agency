import React from "react";
import WorkList from "@/components/ui/WorkList";
import WorkSection from "@/components/section/WorkSection";
export const metadata = {
  title: "Works",
  description: "...",
};
const WorkPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <h1 className="redd mt-20 pl-5 text-3xl tablet:text-5xl desktop:ml-20 desktop:text-5xl">
        All Demos
      </h1>
      <WorkSection />
    </div>
  );
};

export default WorkPage;
//
