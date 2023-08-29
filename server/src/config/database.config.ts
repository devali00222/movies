import { Options } from "sequelize";
import getConfig from "./config";

export const databaseConfigOptions: Options = {
  database: getConfig().dbName,
  username: getConfig().dbUser,
  password: getConfig().dbPass,
  host: getConfig().dbHost,
  port: parseInt(getConfig().dbPort as string ,10),
  dialect: "mysql",
};
