import React from "react";

const ServiceSection = () => {
  return (
    <div className="red flex h-screen w-screen items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="red flex h-full w-full items-center justify-center">
          <div className="red h-full w-96">text</div>
          <div className="flex h-full w-full items-center justify-center gap-5">
            {["Product Photography", "Local SEO", "Social Media Marketing"].map(
              (data, idx) => {
                return (
                  <div
                    key={idx}
                    className="red text-yourMaker flex size-96 items-center justify-center rounded-2xl"
                  >
                    {data}
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="red flex h-full w-full flex-row-reverse">
          <div className="red h-full w-96">text</div>
          <div className="flex h-full w-full items-center justify-center gap-5">
            {["Website D&D", "Graphic Design", "SEO"].map((data, idx) => {
              return (
                <div
                  key={idx}
                  className="red text-yourMaker flex size-96 items-center justify-center rounded-2xl"
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
