"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Logo = () => {
  return (
    <div className="flex">
      <Link href={"/"} className="flex">
        <Image
          className="text-white"
          src={"/assets/YM.svg"}
          width={40}
          height={20}
          alt="Your-Maker Log0"
          priority
        />
        <h1 className="hidden text-4xl font-bold tablet:block">
          <span className="text-orange-600">YOUR</span> MAKER
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
