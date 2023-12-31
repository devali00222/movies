import { Sequelize } from "sequelize";
import { databaseConfigOptions } from "./database.config";

const { database, username, password } = databaseConfigOptions;

export const sequelize = new Sequelize(
  database!,
  username!,
  password!,
  databaseConfigOptions
);
