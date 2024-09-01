import React from "react";
import { work } from "@/data/works";
import Image from "next/image";
import { cn } from "@/lib/utils";
const GridLayout = () => {
  return (
    <div className="redd flex min-h-screen w-screen flex-wrap items-center justify-center gap-5 p-10">
      <div className="btns red h-20 w-full"></div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
        {work.map((data, i) => {
          return <WorkCard key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

function WorkCard({ data }) {
  return (
    <div
      // style={{ backgroundColor: data.color }}
      className={cn(
        `redd relative flex h-full w-[30rem] items-center justify-center p-10 text-4xl`,
      )}
    >
      <div className="redd relative flex h-96 w-96 cursor-pointer flex-col items-center justify-center gap-1 rounded-md">
        <div className="redd flex w-full items-center justify-center shadow-2xl">
          <Image
            src={data.img}
            width={1000}
            height={500}
            className="redd w-full"
            alt="Your Maker Demo  Poster"
          />
        </div>
      </div>
    </div>
  );
}

export default GridLayout;
