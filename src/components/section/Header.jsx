import React from "react";
import Logo from "../ui/Logo";
import { navigation } from "@/data/navigation";
import Link from "next/link";
const Header = () => {
  return (
    <div className="redddd bg-background/70 fixed z-[99] h-14 w-full overflow-x-hidden shadow shadow-white backdrop-blur-md">
      <div className="reddd flex h-full w-full items-center justify-around">
        <div className="reddd">
          <Logo />
        </div>
        <div className="redddd hidden h-10 w-[30rem] items-center justify-between laptop:flex">
          {navigation.map((data, idx) => {
            return (
              <h1
                key={idx}
                className="text-3xl transition duration-300 hover:text-orange-600"
              >
                <Link href={data.route}>{data.lable}</Link>
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
