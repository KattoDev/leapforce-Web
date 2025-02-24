import express from "express";
import cors from "cors";
import morgan from "morgan";

import appConfig from "./appConfig";
import USERS_ROUTING from "./endpoints/users/router";
import TEAMS_ROUTING from "./endpoints/teams/router";
import PROJECTS_ROUTING from "./endpoints/projects/router";
import REPORTS_ROUTING from "./endpoints/reports/router";
import TASKS_ROUTING from "./endpoints/tasks/router";

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
app.use("/teams", TEAMS_ROUTING);
app.use("/projects", PROJECTS_ROUTING);
app.use("/reports", REPORTS_ROUTING);
app.use("/tasks", TASKS_ROUTING);

export default app;
