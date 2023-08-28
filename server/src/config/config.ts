import dotenv from "dotenv";
dotenv.config();

function getConfig() {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    dbName: isProduction ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV,
    dbUser: isProduction ? process.env.DB_USER_PROD : process.env.DB_USER_DEV,
    dbPass: isProduction ? process.env.DB_PASS_PROD : process.env.DB_PASS_DEV,
    dbHost: isProduction ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV,
    dbPort: isProduction
      ? parseInt(process.env.DB_PORT_PROD as string, 10)
      : parseInt(process.env.DB_PORT_DEV as string, 10),
    secretKey: isProduction
      ? process.env.JWT_PRIVATE_KEY
      : process.env.JWT_PRIVATE_KEY,
    port: isProduction ? process.env.PORT_PROD : process.env.PORT_DEV,
  };
}

export default getConfig;
