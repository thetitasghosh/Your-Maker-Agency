"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { navigation } from "@/data/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarVarient, NavbarItem } from "@/libs/anim/animate";
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
        className="redd fixed right-5 top-3 z-[999] mr-5 flex w-16 items-center justify-center rounded-3xl bg-yourMaker p-1 uppercase laptop:hidden"
      >
        <h1 className="z-[100] rounded-3xl">{isActive ? "close" : "menu"}</h1>
        <AnimatePresence mode="wait">
          <NavBar active={isActive} />
        </AnimatePresence>
      </div>
    </>
  );
};

const NavBar = ({ active, setActive, data }) => {
  return (
    <motion.div
      variants={NavbarVarient}
      initial="init"
      animate={active ? "anim" : "init"}
      className="fixed right-0 top-0 z-[99] my-2 h-[24rem] w-[20rem] rounded-xl bg-yourMaker"
    >
      <div className="redd flex h-full w-full flex-col items-center justify-between">
        <div className="w-full">
          <h1 className="redd w-full pl-2 text-2xl font-semibold uppercase">
            your maker
          </h1>
        </div>
        {/* <h1 className="w-full uppercase">navigation</h1> */}
        <div className="redd flex h-96 w-full flex-col">
          <h1 className="uppercase">navigation</h1>
          <div className="flex h-full w-full flex-col items-start justify-center gap-5">
            <AnimatePresence mode="wait">
              {navigation.map((data, i) => {
                return (
                  <div key={i} className="redd w-full">
                    <motion.div
                      variants={NavbarItem}
                      initial="init"
                      animate={active ? "anim" : "init"}
                      exit="exit"
                      custom={i}
                      className="redd relative flex w-full"
                    >
                      <Link
                        className="redd w-full pl-5 text-3xl"
                        href={data.route}
                      >
                        {data.lable}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default Header;
//TODO:  add Nabar Component
