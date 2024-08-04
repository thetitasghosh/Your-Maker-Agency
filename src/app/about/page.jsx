import React from "react";
import TextReveal from '@/components/ui/TextReveal'
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
        <h1 className="tablet:text-4xl capitalize
         text-xl laptop:text-5xl">
          We always think about our client&apos;s growth
        </h1>
        <h1 className="font-extrabold uppercase text-2xl text-yourMaker tablet:text-5xl laptop:text-7xl">
          &apos;Thinking of Your Growth&apos;
        </h1>
      </div>
      <div
        id="page2"
        className="redd flex h-screen w-full items-center justify-end"
      >
        <div className="redd w-[25rem] laptop:w-[50rem] tablet:w-[40rem] desktop:w-[70rem] text-left pr-10">
          <TextReveal/>
        </div>
      </div>
      <div
        id="page3"
        className="red flex h-screen w-full items-center justify-center"
      >

      </div>
    </div>
  );
};

export default AboutPage;
