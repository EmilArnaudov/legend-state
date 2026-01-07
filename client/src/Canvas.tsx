import { Box, CameraControls, PerspectiveCamera, Sky } from "@react-three/drei";
import {
  Canvas,
  useFrame,
  // useFrame
} from "@react-three/fiber";

import { useRef } from "react";
import type { Mesh } from "three";
// import { damp3, dampE } from "maath/easing";
// import { useTransformStore } from "./store";
import {
  // $transform,
  state,
} from "./legend";
import { damp3, dampE } from "maath/easing";

const AnimatedBox = () => {
  console.log("AnimatedBox render");
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    damp3(ref.current.position, state.position, 0.25, delta);
    dampE(ref.current.rotation, state.rotation, 0.25, delta);
  });

  return (
    <Box ref={ref}>
      <meshStandardMaterial />
    </Box>
  );
};

const Scene = () => {
  // console.log("Scene render");

  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <pointLight args={[5, 5, 5]} intensity={1500000} />
      <AnimatedBox />
      <Sky />
      <PerspectiveCamera />
      <CameraControls />
    </Canvas>
  );
};

export { Scene };
