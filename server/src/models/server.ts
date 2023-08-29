import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { Sequelize } from "sequelize";
import { sequelize } from "../config/sequelize";
import waitOn from "wait-on";
import moviesRouter from "../controllers/Movies/moviesRoute";
import genresRoute from "../controllers/Genres/genresRoute";
import directorRoute from "../controllers/Directors/directorsRoute";
import qualifierRoute from "../controllers/Qualifiers/qualifiersRoute";
import authRoute from "../controllers/Auth/authRoute";
import favoritesRoute from "../controllers/Favorites/favoritesRoute";
import watchListRoute from "../controllers/WatchList/watchListRoute";
import getConfig from "../config/config";

class Server {
  private app: Application;
  private port: number;
  private db: Sequelize;
  private apiRoutes: {
    moviesPath: string;
    genrePath: string;
    directorPath: string;
    qualifierPath: string;
    authPath: string;
    favoritesPath: string;
    watchListPath: string;
  };
  constructor() {
    this.app = express();
    this.port = parseInt(getConfig().port as string, 10) | 3500;
    this.db = sequelize;
    this.apiRoutes = {
      moviesPath: "/api/movies",
      genrePath: "/api/genres",
      directorPath: "/api/directors",
      qualifierPath: "/api/qualifiers",
      authPath: "/api/auth",
      favoritesPath: "/api/favorites",
      watchListPath: "/api/watchlist",
    };
    this.middlewares();
    this.routes();
  }
  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }
  private routes() {
    this.app.use(this.apiRoutes.moviesPath, moviesRouter);
    this.app.use(this.apiRoutes.genrePath, genresRoute);
    this.app.use(this.apiRoutes.directorPath, directorRoute);
    this.app.use(this.apiRoutes.qualifierPath, qualifierRoute);
    this.app.use(this.apiRoutes.authPath, authRoute);
    this.app.use(this.apiRoutes.favoritesPath, favoritesRoute);
    this.app.use(this.apiRoutes.watchListPath, watchListRoute);
  }
  public start() {
    try {
      this.db.authenticate().then(() =>console.log("Database connection has been established successfully."))
      this.app.listen(this.port, () => {
        console.log(`Server is running on http://localhost:${this.port}`);
      });
    } catch (error) {
      console.error("Error waiting for the database:", error);
    }
  }
}
export default Server;
