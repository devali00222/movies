import dotenv from "dotenv";
import { sequelize } from "./src/config/sequelize";
import Server from "./src/models/server";

dotenv.config({
  path: "../config/.env",
});

const server = new Server();
server.start();
