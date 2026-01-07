import { Scene } from "./Canvas";
import { useTransformStore, type Vec3 } from "./store";
interface C1Props {
  position: Vec3;
  rotation: Vec3;
}
const Component1 = (props: C1Props) => {
  const { position, rotation } = props;

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
      <p>Position: [{position.map((v) => v.toFixed(2)).join(", ")}]</p>
      <p>Rotation: [{rotation.map((v) => v.toFixed(2)).join(", ")}]</p>
      Hello
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
  const { position, rotation } = useTransformStore();

  console.log("Layout render");
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Component1 position={position} rotation={rotation} />
      <Component2 />
    </div>
  );
};

export { Layout };
