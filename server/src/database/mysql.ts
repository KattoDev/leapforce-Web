import mysql from "mysql";
import appConfig from "../appConfig";

const DB_CONFIG = {
  host: appConfig.mysql.host,
  user: appConfig.mysql.user,
  password: appConfig.mysql.password,
  database: appConfig.mysql.database,
};

let connection: mysql.Connection;

/**
 * Function to connect to MySQL servers and returning the connection to make queries
 */
function connectToMySQL() {
  connection = mysql.createConnection(DB_CONFIG); // create the connection with the database config

  // if the connection fails the error is displayed on console
  connection.connect((err) => {
    if (err) {
      console.log("[DB error]", err);
      setTimeout(connectToMySQL, 200);
    } else {
      console.log("[INFO] Connected to database");
    }
  });

  // if a connection error ocurrs try to reconnect to MySQL
  connection.on("error", (err) => {
    console.log("[DB error]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      connectToMySQL();
    } else {
      throw err;
    }
  });
}

connectToMySQL();

export { connection };
