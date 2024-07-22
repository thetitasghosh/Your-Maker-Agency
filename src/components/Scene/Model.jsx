import React from "react";
import { useThree } from "@react-three/fiber";
import { Text,useGLTF } from "@react-three/drei";

const Model = () => {
  const { viewport } = useThree();

  return (
    <group scale={viewport.width / 2}>
      <Text
        fontStyle="bold"
        font={"/font/NeueRegradeExtrabold.otf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color={"white"}
        anchorX={"center"}
        anchorY={"middle"}
      >
        YOURMAKER
      </Text>
      <mesh>
        <YourMaker/>
      </mesh>
    </group>
  );
};

export default Model;
function YourMaker(props){
   const { nodes, materials } = useGLTF("/model/yourmaker.glb");
  return (
    <group {...props} scale={[0,0,1]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh0.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh1.geometry}
        material={materials.mat1}
      />
    </group>
  );
}
useGLTF.preload("/model/yourmaker.glb");