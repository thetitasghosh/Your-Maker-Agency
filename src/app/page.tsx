"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import WorkSection from "@/components/section/WorkSection";
import ServiceSection from "@/components/section/ServiceSection";
import ContactSection from "@/components/section/ContactSection";
import Preloader from "@/components/ui/Preloader";
import { AnimatePresence } from "framer-motion";
// import Scene from "@/components/Scene/Scene";
// import dynamic from "next/dynamic";
// const Scene = dynamic(()=>import('@/components/Scene/Scene'))
const Home = () => {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
      // document.body.style = "hidden";
      // document.querySelector(".MainPage").style.overflow = "hidden";

      window.scrollTo(0, 0);
    }, 1000);
  }, [isloading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isloading && <Preloader />}
      </AnimatePresence>
      <div className="MainPage relative flex min-h-screen w-screen flex-col items-center justify-center">
        <HeroSection />
        <AboutSection />
        <WorkSection title={"INDEX"} Intro={""} />
        <ServiceSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
