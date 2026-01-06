import { Socket } from "socket.io";

type Vec3 = [number, number, number];

class PathGenerator {
  private t = 0;
  private speed = 0.02;

  next(): { position: Vec3; rotation: Vec3 } {
    this.t += this.speed;

    // Figure-8 path on XZ plane with Y bobbing
    const position: Vec3 = [
      Math.sin(this.t) * 3,
      Math.sin(this.t * 2) * 0.5,
      Math.sin(this.t * 2) * 3,
    ];

    // Rotation follows movement + spin
    const rotation: Vec3 = [
      Math.sin(this.t * 0.5) * Math.PI * 0.25,
      this.t,
      Math.cos(this.t * 0.3) * Math.PI * 0.1,
    ];

    return { position, rotation };
  }

  reset() {
    this.t = 0;
  }
}

class GameLoop {
  private timeoutId: NodeJS.Timeout | undefined;
  private path = new PathGenerator();

  randomTimeout(): number {
    const time = Math.random() * 1000;
    // return time < 200 ? 200 : time > 550 ? 550 : time;
    return 100;
  }

  loop(socket: Socket) {
    const tick = () => {
      const { position, rotation } = this.path.next();
      socket.emit("transform", { position, rotation });
      this.timeoutId = setTimeout(tick, this.randomTimeout());
    };

    tick();
  }

  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
    this.path.reset();
  }
}

const gameLoop = new GameLoop();
export { gameLoop };
