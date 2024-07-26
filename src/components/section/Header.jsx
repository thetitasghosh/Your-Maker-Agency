'use client'
import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { navigation } from "@/data/navigation";
import Link from "next/link";
const Header = () => {
  const [isActive,setIsActive] = useState(false)
  return (
    <div className="redddd bg-background/70 fixed z-[99] h-14 w-full overflow-x-hidden shadow shadow-white backdrop-blur-md">
      <div className="reddd laptop::justify-around flex h-full w-full items-center justify-between px-10">
        <div className="reddd">
          <Logo />
        </div>
        <div className="redddd hidden h-10 w-[30rem] items-center justify-around laptop:flex">
          {navigation.map((data, idx) => {
            return (
              <h1
                key={idx}
                className="text-2xl transition duration-300 hover:text-orange-600"
              >
                <Link href={data.route}>{data.lable}</Link>
              </h1>
            );
          })}
        </div>
        <div onClick={()=>setIsActive(!isActive)} className="size-8 items-center justify-center laptop:hidden">
          {
            isActive ? <GrClose className="w-full h-full"/>:<FiMenu className="w-full h-full"/>
          }
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      
    </div>
  )
}
  


export default Header;
//TODO:  add Nabar Component
