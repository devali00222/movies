import { Options } from "sequelize";
import getConfig from "./config";

export const databaseConfigOptions: Options = {
  database: getConfig().dbName,
  username: getConfig().dbUser,
  password: getConfig().dbPass,
  host: getConfig().dbHost,
  port: getConfig().dbPort,
  dialect: "mysql",
};
