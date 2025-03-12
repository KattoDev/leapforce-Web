import "dotenv/config";

const appConfig = {
  app: {
    port: process.env.PORT,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  },
};

export default appConfig;
