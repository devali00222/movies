import dotenv from "dotenv";
import Server from "./models/server";

declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

const server = new Server();
server.start();
