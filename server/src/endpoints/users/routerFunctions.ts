import responses from "../../web/responses";
import { connection } from "../../database/mysql";

const TABLE = "users";

interface User {
  UID: number;
  name: string;
  phone: number;
  email: string;
  team: number;
  password: string;
  isAdmin: boolean;
}

/**
 * if the request body is empty:
 *
 * - Get all the entries of the users table
 *
 * if the request body contains `email and password`:
 *
 * - Get the specific entry
 *
 *
 * @param req the request
 * @param res the response
 */
async function getAll(req: any, res: any) {
  try {
    // if the request body is not empty query via login
    if (req.body.email && req.body.password) {
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

/**
 * gets the user info with the url query [/?email=email&password=password]
 *
 * mostly used for login
 *
 * @param req the request
 * @param res the response
 */
async function getUniqueViaLogin(req: any, res: any): Promise<void> {
  try {
    new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM ${TABLE} WHERE 
        email = "${req.query.email}" AND 
        password = "${req.query.password}"`,
        (err, res) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then((user: User | any) => {
      responses.success(req, res, user, 200);
    });
  } catch (error: any) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Gets a unique `user` entry of a user with a specific `ID`.
 *
 * @param req the request
 * @param res the response
 */
async function getUniqueViaID(req: any, res: any): Promise<void> {
  try {
    await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM ${TABLE} WHERE 
        UID = ${req.params.UID}`,
        (err, res) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then((user: User | any) => {
      responses.success(req, res, user, 200);
    });
  } catch (error: any) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Method to remove an entry in the users table
 *
 * @param req the request
 * @param res the response
 */
async function remove(req: any, res: any): Promise<void> {
  try {
    await new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM ${TABLE} WHERE 
        UID = ${req.params.UID}`,
        (err, res) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then(() => {
      responses.success(
        req,
        res,
        `USER WITH UID ${req.params.UID} REMOVED`,
        200
      );
    });
  } catch (error: any) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Method to add a entry to users table
 *
 * @param req the request body in a JSON body
 * @param res the response
 */
async function add(req: any, res: any): Promise<void> {
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
    }
  } catch (error: any) {
    responses.error(req, res, error, 500);
  }
}

async function update(req: any, res: any): Promise<void> {
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
          `UPDATED USER WITH UID ${req.body.UID}`,
          200
        );
      });
    }
  } catch (error: any) {
    responses.error(req, res, error, 500);
  }
}

export default { add, remove, getUniqueViaID, getAll, update };

export default {
  add,
  remove,
  getUniqueViaID,
  getUniqueViaLogin,
  getAll,
  update, // TODO PENDING TO TEST
};
