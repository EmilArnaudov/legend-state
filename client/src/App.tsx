import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { Layout } from "./Layout";
import { useTransformStore } from "./store";

const socket = io("http://localhost:8000");

const App = () => {
  const setTransform = useTransformStore((state) => state.setTransform);

  useEffect(() => {
    socket.connect();
    socket.on("transform", (data) => {
      setTransform(data.position, data.rotation);
    });

    return () => {
      socket.disconnect();
    };
  }, [setTransform]);

  return <Layout />;
};

export { App };
