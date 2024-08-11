import React from "react";
import TextReveal from "@/components/ui/TextReveal";
export const metadata = {
  title: "About Us",
  description: "...",
};
const AboutPage = () => {
  return (
    <div className="redd flex min-h-screen w-screen flex-col items-center justify-center">
      <div
        id="page1"
        className="redd flex h-screen w-full flex-col items-center justify-center gap-10"
      >
        {/* <h1 className="text-xl capitalize tablet:text-4xl laptop:text-5xl">
          We always think about our client&apos;s growth
        </h1> */}
        <h1 className="text-2xl font-extrabold uppercase text-yourMaker tablet:text-5xl laptop:text-7xl">
          Thinking of Your Growth
        </h1>
      </div>
      <div
        id="page2"
        className="redd flex h-screen w-full items-start justify-end"
      >
        <div className="redd w-[25rem] pr-10 text-left tablet:w-[40rem] laptop:w-[50rem] desktop:w-[70rem]">
          <TextReveal />
        </div>
      </div>
      <div
        id="page3"
        className="red flex h-screen w-full items-center justify-center"
      ></div>
    </div>
  );
};

export default AboutPage;
