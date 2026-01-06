import { create } from "zustand";

type Vec3 = [number, number, number];

interface TransformState {
  position: Vec3;
  rotation: Vec3;
  setTransform: (position: Vec3, rotation: Vec3) => void;
}

const useTransformStore = create<TransformState>((set) => ({
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  setTransform: (position, rotation) => set({ position, rotation }),
}));

export { useTransformStore };
