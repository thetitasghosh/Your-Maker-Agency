"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Logo = () => {
  return (
    <div className="redd flex h-full w-full items-center justify-center">
      <Link href={"/"} className="flex items-center justify-center">
        <Image
          className="redd size-9 text-white"
          src={"/assets/YM.svg"}
          width={100}
          height={100}
          alt="Your-Maker Log0"
          priority
        />
        <h1 className="hidden text-4xl font-semibold laptop:block">
          <span className="text-orange-600">YOUR</span> MAKER
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
