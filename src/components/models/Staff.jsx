/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Staff = React.memo(function Staff(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/magic_stick__for_witcher.glb");
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={[2, 2, 2]}
      position={[0, 1, 0]}
      ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Default_OBJ}
        rotation={[Math.PI / -1, 0, 0]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_1.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_2.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_3.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry}
        material={materials.Wizard_Staff2}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      /> */}
    </group>
  );
});

export default Staff;
useGLTF.preload("/models/magic_stick__for_witcher.glb");
