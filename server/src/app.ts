import express from "express";
import cors from "cors";
import morgan from "morgan";

import appConfig from "./appConfig";
import USERS_ROUTING from "./endpoints/users/router";

require("dotenv").config();

const app = express();

// CORS AND MIDDLEWARE CONFIG
app.use(
  //CORS
  cors({
    origin: process.env.FRONTEND,
    methods: ["GET, POST"],
    allowedHeaders: ["Content-Type"],
  }),
  // MIDDLEWARE
  morgan("dev"),
  express.json(),
  express.urlencoded({ extended: true })
);

// APP SETTINGS
app.set("port", appConfig.app.port);

// ROUTING
app.use("/users", USERS_ROUTING);

export default app;
