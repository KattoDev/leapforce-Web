import { connection } from "../../database/mysql";

const TABLE = "projects";

/**
 * Get `all` entries in the **projects table**
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
 * Get the entry with a specific `id` in the **projects table**
 *
 * @param PID the project id to query
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getUniqueViaID(PID: number) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${TABLE} WHERE PID = ${PID}`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * Adds to **projects table** the data with the standard information.
 *
 * such as `name, description, endDate, team, finished`
 * @param data data with the standard information
 *
 * **MUST CONTAIN: [name, description, endDate, team, finished]**
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function add(data: any) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${TABLE}
      (name, description, endDate, team, finished)
      VALUES
      ("${data.name}", "${data.description}", "${data.endDate}", "${data.team}", ${data.finished})`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * `remove a entry` in the **projects table** with specific `id`.
 *
 * @param PID the project's id to remove
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function remove(PID: number) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${TABLE} WHERE PID = ${PID}`, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

/**
 * **Patch** the information of a project
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
        description = "${data.description}",
        endDate = "${data.endDate}",
        team = "${data.team}",
        finished = ${data.finished},
        WHERE PID = ${data.PID}; `,
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
