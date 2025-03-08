import express from "express";
import routerFunctions from "./routerFunctions";

const USERS_ROUTING = express.Router();

USERS_ROUTING.get("/", routerFunctions.getAll);
USERS_ROUTING.get("/:UID", routerFunctions.getUniqueViaID);
USERS_ROUTING.get("/login", routerFunctions.getUniqueViaLogin);

USERS_ROUTING.post("/", routerFunctions.add);

USERS_ROUTING.delete("/:UID", routerFunctions.remove);

USERS_ROUTING.patch("/", routerFunctions.update);

export default USERS_ROUTING;
