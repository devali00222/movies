import dotenv from "dotenv";
dotenv.config();

function getConfig() {
  const isProduction = process.env.NODE_ENV === "development";
  return {
    dbName: isProduction ? process.env.DB_NAME_DEV : process.env.DB_NAME_PROD,
    dbUser: isProduction ? process.env.DB_USER_DEV : process.env.DB_USER_PROD,
    dbPass: isProduction ? process.env.DB_PASS_DEV : process.env.DB_PASS_PROD,
    dbHost: isProduction ? process.env.DB_HOST_DEV : process.env.DB_HOST_PROD,
    dbPort: isProduction
      ? process.env.DB_PORT_DEV
      : process.env.DB_PORT_PROD,
    secretKey: isProduction
      ? process.env.JWT_PRIVATE_KEY
      : process.env.JWT_PRIVATE_KEY,
    port: isProduction ? process.env.PORT_DEV : process.env.PORT_PROD,
  };
}

export default getConfig;
