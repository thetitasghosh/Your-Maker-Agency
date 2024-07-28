"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { navigation } from "@/data/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavbarVarient } from "@/libs/anim/animate";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const handleClose = () => {
  //   setTimeout(() => {
  //     setIsActive(!isActive);
  //   }, 1000);
  // };
  return (
    <>
      <div className="redddd bg-background/70 fixed z-[99] h-14 w-full overflow-x-hidden shadow shadow-white backdrop-blur-md">
        <div className="reddd flex h-full w-full items-center justify-between px-10 laptop:justify-around">
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
          {/* <div
            // onClick={() => setIsActive(!isActive)}
            onClick={() => handleClose()}
            className="red relative z-[199] size-8 items-center justify-center laptop:hidden"
          >
            {isActive ? (
              <GrClose className="h-full w-full" />
            ) : (
              <FiMenu className="h-full w-full" />
            )}
          </div> */}
        </div>
      </div>
      {/* {isActive && <NavBar active={isActive} />} */}
      <div
        onClick={() => setIsActive(!isActive)}
        className="redd fixed right-5 top-3 z-[999] flex w-16 items-center justify-center rounded-3xl bg-yourMaker p-1 uppercase laptop:hidden"
      >
        {isActive ? "close" : "menu"}
        <NavBar active={isActive} />
      </div>
    </>
  );
};

const NavBar = ({ active, setActive, data }) => {
  return (
    <motion.div
      variants={NavbarVarient}
      initial="init"
      // animate={active ? "anim" : "init"}
      className="relative z-[998] h-[24rem] w-[20rem] bg-yourMaker"
    >
      {/* h */}
    </motion.div>
  );
};

export default Header;
//TODO:  add Nabar Component
