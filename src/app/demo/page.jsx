import React from "react";
import WorkList from "@/components/ui/WorkList";
export const metadata = {
  title: "Works",
  description: "...",
};
const WorkPage = () => {
  return (
    <div className="flex-sc min-h-screen gap-5 p-10">
      <WorkList />
    </div>
  );
};

export default WorkPage;
//
