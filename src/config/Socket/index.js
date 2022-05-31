import  io  from "socket.io-client";

let Socket = io.connect(import.meta.env.VITE_BACKEND_URL);

export default Socket;