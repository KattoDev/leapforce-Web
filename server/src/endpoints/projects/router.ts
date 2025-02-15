import express from "express";
import routerFunctions from "./routerFunctions";

const PROJECTS_ROUTING = express.Router();

PROJECTS_ROUTING.get("/", routerFunctions.getAll);
PROJECTS_ROUTING.get("/:id", routerFunctions.getUniqueViaID);

PROJECTS_ROUTING.post("/", routerFunctions.add);

PROJECTS_ROUTING.delete("/", routerFunctions.remove);

PROJECTS_ROUTING.patch("/", routerFunctions.update);

export default PROJECTS_ROUTING;
