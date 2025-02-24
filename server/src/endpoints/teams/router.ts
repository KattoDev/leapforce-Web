import express from "express";
import routerFunctions from "./routerFunctions";

const TEAMS_ROUTING = express.Router();

TEAMS_ROUTING.get("/", routerFunctions.getAll);
TEAMS_ROUTING.get("/:TMID", routerFunctions.getUniqueViaID);

TEAMS_ROUTING.post("/", routerFunctions.add);

TEAMS_ROUTING.delete("/", routerFunctions.remove);

TEAMS_ROUTING.patch("/", routerFunctions.update);

export default TEAMS_ROUTING;
