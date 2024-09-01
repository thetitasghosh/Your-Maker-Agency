import React from "react";
import ContactLayout from "@/components/section/ContactLayout";
import { Social } from "@/data/navigation";
export const metadata = {
  title: "Contact Us",
  description: "...",
};
const ContactPage = () => {
  return (
    <div className="flex-sc">
      <div className="redd flex h-full w-full flex-col items-center justify-center gap-10 pl-20">
        <div className="redd w-full">
          <p className="text-5xl font-semibold">
            Let&apos;s unlock together the next <br /> level of possibilities!
            Reach out.
          </p>
        </div>
        <div className="redd flex w-full flex-col">
          <h1 className="text-3xl font-medium uppercase text-stone-700">
            social media
          </h1>
          <div className="flex w-full items-center justify-start gap-2">
            {Social.map((data, i) => {
              return (
                <div className="text-2xl" key={i}>
                  {data.social}{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-full flex  w-full">
        <ContactLayout />
      </div>
    </div>
  );
};

export default ContactPage;
