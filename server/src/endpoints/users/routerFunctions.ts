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
 * Get all the entries of the `users` table
 *
 * @param req the request
 * @param res the response
 */
async function getAll(req: any, res: any) {
  try {
    await new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${TABLE}`, (err, res) => {
        return err ? reject(err) : resolve(res);
      });
    }).then((users: Array<User> | any) => {
      responses.success(req, res, users, 200);
    });
  } catch (error: any) {
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
    if (!bodyValidator(req.body)) {
      throw new Error("UPDATE REQUEST BODY IS INCOMPLETE");
    } else {
      await new Promise((resolve, reject) => {
        connection.query(
          `INSERT INTO ${TABLE}
          (name, phone, email, team, password, isAdmin)
          VALUES
          ("${req.body.name}",
          "${req.body.phone}",
          "${req.body.email}",
          "${req.body.team}",
          "${req.body.password}",
          ${req.body.isAdmin})`,
          (err, res) => {
            return err ? reject(err) : resolve(res);
          }
        );
      }).then(() => {
        responses.success(req, res, `USER ADDED`, 200);
      });
    }
  } catch (error: any) {
    responses.error(req, res, error, 500);
  }
}

async function update(req: any, res: any): Promise<void> {
  try {
    if (!bodyValidator(req.body)) {
      throw new Error("UPDATE REQUEST BODY IS INCOMPLETE");
    } else {
      await new Promise((resolve, reject) => {
        connection.query(
          `
          UPDATE ${TABLE} SET
          name = "${req.body.name}",
          phone = "${req.body.phone}",
          email = "${req.body.email}",
          team = "${req.body.team}",
          password = "${req.body.password}",
          isAdmin = ${req.body.isAdmin} WHERE UID = ${req.body.UID};`,
          (err, res) => {
            return err ? reject(err) : resolve(res);
          }
        );
      }).then(() => {
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

/**
 * function to validate if the body has the basic User implementations
 *
 * @returns true if the body is complete
 * @returns false if the body is incomplete
 */
function bodyValidator(body: User): boolean {
  if (
    !body.name &&
    !body.phone &&
    !body.email &&
    !body.team &&
    !body.password &&
    !body.isAdmin
  ) {
    return false;
  } else return true;
}

export default {
  add,
  remove,
  getUniqueViaID,
  getUniqueViaLogin,
  getAll,
  update, // TODO PENDING TO TEST
};
