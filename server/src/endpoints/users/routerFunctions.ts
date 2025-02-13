import queries from "./queries";
import responses from "../../web/responses";

// ! --------------------------------------------------------------------------
// ! --------------------------------------------------------------------------
// ! --------------------------------------------------------------------------
// ! --------------------------------------------------------------------------

// TODO FIX THIS
// ? if the body has a JSON routes to getUniqueViaLogin otherwise getAllEntries

async function getAll(req: any, res: any) {
  return responses.error(req, res, "FIX THIS @ routerFunctions.ts", 500);
  try {
    console.log("ALERT: " + req.body);
    if (req.body != "") {
      await queries
        .getUniqueViaLogin(req.body.email, req.body.password)
        .then((items) => {
          responses.success(req, res, items, 200);
        });
    } else {
      await queries.getAllEntries().then((items) => {
        responses.success(req, res, items, 200);
      });
    }
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}
// ! --------------------------------------------------------------------------
// ! --------------------------------------------------------------------------
// ! --------------------------------------------------------------------------
// ! --------------------------------------------------------------------------

/**
 * Gets a unique entry of a user with a specific ID.
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
 * Method to remove an entry in the users table
 *
 * @param req the request entry in a JSON body
 * @param res the response
 */
async function remove(req: any, res: any) {
  try {
    await queries.remove(req.body.uid);
    responses.success(req, res, "Item eliminado", 200);
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Method to add a entry to users table
 * @param req the request body in a JSON body
 * @param res the response
 */
async function add(req: any, res: any) {
  try {
    queries.add(req.body);
    responses.success(req, res, req.body, 200);
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

export default { add, remove, getUniqueViaID, getAll };
