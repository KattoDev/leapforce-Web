import responses from "../../web/responses";
import { connection } from "../../database/mysql";
import { Team } from "../../web/globalInterfaces";

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
      connection.query(`SELECT * FROM ${TABLE}`, (err: any, res: any) => {
        return err ? reject(err) : resolve(res);
      });
    }).then((teams: Array<Team> | any) => {
      responses.success(req, res, teams, 200);
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
        `SELECT * FROM ${TABLE} WHERE TMID = ${req.params.TMID}`,
        (err: any, res: any) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then((team: Team | any) => {
      responses.success(req, res, team, 200);
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
        `DELETE FROM ${TABLE} WHERE 
        TMID = ${req.params.TMID}`,
        (err: any, res: any) => {
          return err ? reject(err) : resolve(res);
        }
      );
    }).then(() => {
      responses.success(
        req,
        res,
        `TEAM WITH TMID ${req.params.TMID} REMOVED`,
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
    if (!req.body.name) {
      throw new Error("ADD REQUEST BODY IS INCOMPLETE");
    } else {
      new Promise((resolve, reject) => {
        connection.query(
          `INSERT INTO ${TABLE}
          (name)
          VALUES
          ("${req.body.name}")`,
          (err: any, res: any) => {
            return err ? reject(err) : resolve(res);
          }
        );
      }).then(() => {
        responses.success(req, res, `TEAM ${req.body.name} ADDED`, 201);
      });
    }
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function update(req: any, res: any) {
  try {
    if (!req.body.TMID && !req.body.name && !req.body.projects) {
      throw new Error("UPDATE BODY IS INCOMPLETE");
    } else {
      new Promise((resolve, reject) => {
        connection.query(
          `
              UPDATE ${TABLE} SET
              name = "${req.body.name}",
              projects = "${req.body.projects}"
              WHERE TMID = ${req.body.TMID}; `,
          (err, res) => {
            return err ? reject(err) : resolve(res);
          }
        );
      }).then(() => {
        responses.success(
          req,
          res,
          `UPDATED TEAM WITH TMID ${req.body.TMID}`,
          200
        );
      });
    }
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

export default { add, remove, getUniqueViaID, getAll, update };
