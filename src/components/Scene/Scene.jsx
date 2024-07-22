"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <div className=" w-screen h-screen">
      <Canvas
        className="red absolute w-full h-96 rounded-md"
        style={{ background: "black" }}
      >
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Scene;
