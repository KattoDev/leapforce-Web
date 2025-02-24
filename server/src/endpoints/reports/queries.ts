import { connection } from "../../database/mysql";

const TABLE = "reports";

/**
 * Get `all` entries in the **reports table**
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
 * Get the entry with a specific `id` in the **reports table**
 *
 * @param RID the report id to query
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getUniqueViaID(RID: number) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${TABLE} WHERE RID = ${RID}`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * Adds to **reports table** the data with the standard information.
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

export default {
  getAllEntries,
  getUniqueViaID,
  add,
};
