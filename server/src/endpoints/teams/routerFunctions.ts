import responses from "../../web/responses";
import { connection } from "../../database/mysql";

const TABLE = "teams";

/**
 * Get all the entries of the teams table
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
    }).then((items) => {
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
    await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM ${TABLE} WHERE 
        TMID = ${req.params.TMID}`,
        (err, res) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then((items) => {
      responses.success(req, res, items, 200);
    });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

/**
 * Method to remove an entry in the teams table
 *
 * @param req the request entry in a JSON body
 * @param res the response
 */
async function remove(req: any, res: any) {
  try {
    await new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM ${TABLE} WHERE TMID = ${req.body.TMID}`,
        (err, res) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then(() => {
      responses.success(
        req,
        res,
        `TEAM WITH TMID ${req.body.UID} REMOVED`,
        200
      );
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
    new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO ${TABLE}
          (name)
          VALUES
          ("${req.body.name}")`,
        (err, res) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then(() => {
      responses.success(req, res, `TEAM ${req.body.name} ADDED`, 200);
    });
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function update(req: any, res: any) {
  try {
    const REQ_BODY: any = req.body;
    if (REQ_BODY.TMID && REQ_BODY.name && REQ_BODY.projects) {
      new Promise((resolve, reject) => {
        connection.query(
          `
              UPDATE ${TABLE} SET
              name = "${REQ_BODY.name}",
              projects = "${REQ_BODY.projects}"
              WHERE TMID = ${REQ_BODY.TMID}; `,
          (err, res) => {
            return err ? reject(err) : resolve(res);
          }
        );
      }).then(() => {
        responses.success(
          req,
          res,
          `UPDATED TEAM WITH TMID ${REQ_BODY.TMID}`,
          200
        );
      });
    } else throw new Error("UPDATE REQUEST BODY IS INCOMPLETE");
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

export default { add, remove, getUniqueViaID, getAll, update };
