import { connection } from "../../database/mysql";

const TABLE = "tasks";

/**
 * Get `all` entries in the **tasks table**
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
 * Get the entry with a specific `id` in the **tasks table**
 *
 * @param TID the task id to query
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getUniqueViaID(TID: number) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${TABLE} WHERE TID = ${TID}`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * Adds to **tasks table** the data with the standard information.
 *
 * @param data data with the standard information
 *
 *  **MUST CONTAIN: [date, content]**
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function add(data: any) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${TABLE}
      (date, content)
      VALUES
      ("${data.date}", ${data.content})`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * `remove a entry` in the **tasks table** with specific `id`.
 *
 * @param TID the task's id to remove
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function remove(TID: number) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${TABLE} WHERE TID = ${TID}`, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

/**
 * **Patch** the information of a task
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
        department = "${data.department}",
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
