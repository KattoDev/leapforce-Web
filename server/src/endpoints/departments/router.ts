import express from "express";
import routerFunctions from "./routerFunctions";

const DEPARTMENTS_ROUTING = express.Router();

DEPARTMENTS_ROUTING.get("/", routerFunctions.getAll);
DEPARTMENTS_ROUTING.get("/:id", routerFunctions.getUniqueViaID);

DEPARTMENTS_ROUTING.post("/", routerFunctions.add);

DEPARTMENTS_ROUTING.delete("/", routerFunctions.remove);

DEPARTMENTS_ROUTING.patch("/", routerFunctions.update);

export default DEPARTMENTS_ROUTING;
