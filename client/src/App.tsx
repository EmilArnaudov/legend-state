import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { Layout } from "./Layout";
import // useTransformStore,
"./store";
import {
  //  $transform,
  state,
} from "./legend";
// import { useObservable } from "@legendapp/state/react";

const socket = io("http://localhost:8000");

const App = () => {
  // const setTransform = useTransformStore((state) => state.setTransform);

  useEffect(() => {
    socket.connect();
    socket.on("transform", (data) => {
      // setTransform(data.position, data.rotation);
      // $transform.set(data);

      state.position = data.position;
      state.rotation = data.rotation;
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <Layout />;
};

export { App };
