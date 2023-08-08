import { Options } from "sequelize";

export const databaseConfigOptions: Options = {
  database: process.env.DATABASENAME || "movies",
  username: process.env.DATABASEUSERNAME || "root",
  password: process.env.DATABASEPASSWORD || "01093816720Alieliwa",
  host: "localhost",
  dialect: "mysql",
};
