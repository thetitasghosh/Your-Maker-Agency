import React from "react";

const ServiceSection = () => {
  return (
    <div className="redd flex min-h-screen w-screen items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5">
        <h1 className="redd flex w-full items-center justify-center py-10 text-5xl uppercase">
          Our Service
        </h1>
        <div className="redd flex h-full w-full flex-col items-center justify-center desktop:flex-row">
          {/* <div className="redd flex h-full w-96 items-center justify-center">
            text
          </div> */}
          <div className="flex h-full w-full  flex-wrap items-center justify-center gap-5 desktop:flex-row">
            {["Product Photography", "Local SEO", "Social Media Marketing"].map(
              (data, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex size-96 tablet:size-72 items-center justify-center rounded-2xl border border-yourMaker text-yourMaker"
                  >
                    {data}
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="redd desktop:flex-row flex items-center justify-center h-full w-full flex-col">
          {/* <div className="redd flex h-full w-96 items-center justify-center">
            text
          </div> */}
          <div className="flex h-full w-full  flex-wrap items-center justify-center gap-5 desktop:flex-row">
            {["Website D&D", "Graphic Design", "SEO"].map((data, idx) => {
              return (
                <div
                  key={idx}
                  className="flex size-96 tablet:size-72 items-center justify-center rounded-2xl border border-yourMaker text-yourMaker"
                >
                  {data}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
