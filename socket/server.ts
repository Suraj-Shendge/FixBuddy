import { Server } from "socket.io";

let io: Server | null = null;

export function getIO() {
  if (!io) {
    io = new Server({ path: "/api/socket" });
  }
  return io;
}
