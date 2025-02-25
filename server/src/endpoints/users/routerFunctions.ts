import queries from "./queries";
import responses from "../../web/responses";

/**
 * - Get all the entries of the users table
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
 * gets the user info with the url query [/?email=email&password=password]
 *
 * @param req the request
 * @param res the response
 */
async function getUniqueViaLogin(req: any, res: any) {
  try {
    await queries
      .getUniqueViaLogin(req.query.email, req.query.password)
      .then((items) => {
        responses.success(req, res, items, 200);
      });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Gets a unique entry of a user with a specific ID.
 *
 * @param req the request
 * @param res the response
 */
async function getUniqueViaID(req: any, res: any) {
  try {
    await queries.getUniqueViaID(req.params.UID).then((items) => {
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
    await queries.remove(req.body.UID).then(() => {
      responses.success(req, res, `USER WITH UID ${req.body.UID} REMOVED`, 200);
    });
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
    const REQ_BODY: any = req.body;
    if (
      REQ_BODY.UID &&
      REQ_BODY.name &&
      REQ_BODY.address &&
      REQ_BODY.birthDay &&
      REQ_BODY.phone &&
      REQ_BODY.email &&
      REQ_BODY.department &&
      REQ_BODY.position &&
      REQ_BODY.password &&
      REQ_BODY.isAdmin
    ) {
      queries.add(req.body).then(() => {
        responses.success(req, res, `USER ADDED`, 200);
      });
    } else throw new Error("UPDATE REQUEST BODY IS INCOMPLETE");
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function update(req: any, res: any) {
  try {
    const REQ_BODY: any = req.body;
    if (
      REQ_BODY.UID &&
      REQ_BODY.name &&
      REQ_BODY.address &&
      REQ_BODY.birthDay &&
      REQ_BODY.phone &&
      REQ_BODY.email &&
      REQ_BODY.department &&
      REQ_BODY.position &&
      REQ_BODY.password &&
      REQ_BODY.isAdmin
    ) {
      queries.update(REQ_BODY).then(() => {
        responses.success(
          req,
          res,
          `UPDATED USER WITH UID ${REQ_BODY.UID}`,
          200
        );
      });
    } else throw new Error("UPDATE REQUEST BODY IS INCOMPLETE");
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

export default {
  add,
  remove,
  getUniqueViaID,
  getUniqueViaLogin,
  getAll,
  update,
};
