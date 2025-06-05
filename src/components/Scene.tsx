"use client";

import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export const Scene = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <directionalLight position={[-5, -5, 5]} intensity={4} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};
