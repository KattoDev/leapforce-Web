import express from "express";
import routerFunctions from "./routerFunctions";

const TASKS_ROUTING = express.Router();

TASKS_ROUTING.get("/", routerFunctions.getAll);
TASKS_ROUTING.get("/:id", routerFunctions.getUniqueViaID);

TASKS_ROUTING.post("/", routerFunctions.add);

TASKS_ROUTING.delete("/", routerFunctions.remove);

TASKS_ROUTING.patch("/", routerFunctions.update);

export default TASKS_ROUTING;
