import queries from "./queries";
import responses from "../../web/responses";

/**
 * Get all the entries of the teams table
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
 * Gets a unique entry of a team with a specific ID.
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
 * Method to add a entry to teams table
 * @param req the request body in a JSON body
 * @param res the response
 */
async function add(req: any, res: any) {
  try {
    queries.add(req.body).then(() => {
      responses.success(req, res, `DEPARTMENT ADDED`, 200);
    });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

export default { add, getUniqueViaID, getAll };
