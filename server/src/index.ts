import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { gameLoop } from "./service";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
const port = 8000;

io.on("connection", (socket) => {
  gameLoop.loop(socket);
  console.log("client connected:", socket.id);

  socket.on("disconnect", () => {
    gameLoop.stop();
    console.log("client disconnected:", socket.id);
  });
});

server.listen(port, () => {
  console.log("server ready");
});
