import { io } from "socket.io-client"

export const connectWs = () => {
    return io(import.meta.env.VITE_SOCKET_URL, {
    transports: ["websocket", "polling"],
  });
}