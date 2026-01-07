import { useValue } from "@legendapp/state/react";
import { Scene } from "./Canvas";
import { $transform } from "./legend";
// import { useTransformStore } from "./store";
// interface C1Props {
//   position: Vec3;
//   rotation: Vec3;
// }
const Component1 = () => {
  // const { position, rotation } = props;
  const state = useValue($transform);
  console.log("Render component 1");
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>
        Position: [
        {state.position.map((v) => v.toFixed(2)).join(", ")}
        ]
      </p>
      <p>Rotation: [{state.rotation.map((v) => v.toFixed(2)).join(", ")}]</p>
      <p>This should not be blinking</p>
      <p>This should not be blinking</p>
    </div>
  );
};

const Component2 = () => {
  console.log("Render component 2");
  return (
    <div style={{ flex: 1 }}>
      <Scene />
    </div>
  );
};

const Layout = () => {
  // const { position, rotation } = useTransformStore();

  console.log("Layout render");
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Component1 />
      <Component2 />
    </div>
  );
};

export { Layout };
