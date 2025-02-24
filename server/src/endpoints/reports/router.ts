import express from "express";
import routerFunctions from "./routerFunctions";

const REPORTS_ROUTING = express.Router();

REPORTS_ROUTING.get("/", routerFunctions.getAll);
REPORTS_ROUTING.get("/:id", routerFunctions.getUniqueViaID);

REPORTS_ROUTING.post("/", routerFunctions.add);

export default REPORTS_ROUTING;
