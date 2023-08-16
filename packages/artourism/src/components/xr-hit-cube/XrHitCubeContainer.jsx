import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitCube from "./XrHitCube";
import { Suspense } from "react";

const XrHitCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <Suspense fallback={null}>
        <XR>
          <XrHitCube />
        </XR>
        </Suspense>
      </Canvas>
    </>
  );
};

export default XrHitCubeContainer;
