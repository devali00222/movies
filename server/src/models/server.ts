import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { Sequelize } from "sequelize";
import { sequelize } from "../config/sequelize";

class Server {
  private app: Application;
  private port: number;
  private db: Sequelize
  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || "3500", 10) | 3500;
    this.db = sequelize;
    this.middlewares();
    this.routes();
  }
  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }
  private routes() {}
  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
    this.db
      .authenticate()
      .then(() =>
        console.log("Database connection has been established successfully.")
      )
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  }
}
export default Server;
