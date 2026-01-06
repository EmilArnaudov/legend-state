import { Scene } from "./Canvas";
import { useTransformStore } from "./store";

const Layout = () => {
  const position = useTransformStore((state) => state.position);
  const rotation = useTransformStore((state) => state.rotation);

  console.log("Layout render");

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p>Position: [{position.map((v) => v.toFixed(2)).join(", ")}]</p>
        <p>Rotation: [{rotation.map((v) => v.toFixed(2)).join(", ")}]</p>
        Hello
      </div>
      <div style={{ flex: 1 }}>
        <Scene />
      </div>
    </div>
  );
};

export { Layout };
