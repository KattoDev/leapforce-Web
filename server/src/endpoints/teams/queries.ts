import { connection } from "../../database/mysql";

const TABLE = "teams";

/**
 * Get `all` entries in the **teams table**
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getAllEntries() {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${TABLE}`, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

/**
 * Get the entry with a specific `id` in the **teams table**
 *
 * @param TMID the team id to query
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getUniqueViaID(TMID: number) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${TABLE} WHERE TMID = ${TMID}`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * Adds to **teams table** the data with the standard information.
 *
 * **MUST CONTAIN: [name]**
 *
 * @param data data with the standard information
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function add(data: any) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${TABLE}
      (name)
      VALUES
      ("${data.name}")`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * `remove a entry` in the **teams table** with specific `id`.
 *
 * @param TMID the team's id to remove
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function remove(TMID: number) {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM ${TABLE} WHERE TMID = ${TMID}`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * **Patch** the information of a team
 *
 * @todo update the function to work only with necesary data
 * @param data the data with the patch info
 * @returns the entries if the query is successfull otherwise returns a error
 */
function update(data: any) {
  return new Promise((resolve, reject) => {
    connection.query(
      `
        UPDATE ${TABLE} SET
        name = "${data.name}",
        projects = "${data.projects}"
        WHERE TMID = ${data.TMID}; `,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

export default {
  getAllEntries,
  getUniqueViaID,
  add,
  remove,
  update,
};
