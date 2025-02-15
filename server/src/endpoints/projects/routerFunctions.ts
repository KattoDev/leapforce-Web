import queries from "./queries";
import responses from "../../web/responses";

/**
 * Get all the entries of the projects table
 *
 * @param req the request
 * @param res the response
 */
async function getAll(req: any, res: any) {
  try {
    await queries.getAllEntries().then((items) => {
      responses.success(req, res, items, 200);
    });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Gets a unique entry of a project with a specific ID.
 *
 * @param req the request
 * @param res the response
 */
async function getUniqueViaID(req: any, res: any) {
  try {
    await queries.getUniqueViaID(req.params.id).then((items) => {
      responses.success(req, res, items, 200);
    });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Method to remove an entry in the projects table
 *
 * @param req the request entry in a JSON body
 * @param res the response
 */
async function remove(req: any, res: any) {
  try {
    await queries.remove(req.body.PID).then(() => {
      responses.success(
        req,
        res,
        `project WITH PID ${req.body.PID} REMOVED`,
        200
      );
    });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Method to add a entry to projects table
 * @param req the request body in a JSON body
 * @param res the response
 */
async function add(req: any, res: any) {
  try {
    queries.add(req.body).then(() => {
      responses.success(req, res, `project ADDED`, 200);
    });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function update(req: any, res: any) {
  try {
    const REQ_BODY: any = req.body;
    if (
      REQ_BODY.name &&
      REQ_BODY.description &&
      REQ_BODY.endDate &&
      REQ_BODY.department &&
      REQ_BODY.finished
    ) {
      queries.update(REQ_BODY).then(() => {
        responses.success(
          req,
          res,
          `UPDATED project WITH PID ${REQ_BODY.PID}`,
          200
        );
      });
    } else throw new Error("UPDATE REQUEST BODY IS INCOMPLETE");
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

export default { add, remove, getUniqueViaID, getAll, update };
