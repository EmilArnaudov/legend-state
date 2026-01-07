import { observable } from "@legendapp/state";
import type { Vec3 } from "./store";

export interface TransformData {
  position: Vec3;
  rotation: Vec3;
}

export const $transform = observable<TransformData>({
  position: [0, 0, 0],
  rotation: [0, 0, 0],
});

export const state: TransformData = {
  position: [0, 0, 0],
  rotation: [0, 0, 0],
};
