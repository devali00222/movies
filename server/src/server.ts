import dotenv from "dotenv";
import Server from "./models/server";

declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}
dotenv.config({
  path: "../config/.env",
});

const server = new Server();
server.start();