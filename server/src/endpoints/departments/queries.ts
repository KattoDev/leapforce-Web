import { rejects } from "assert";
import { connection } from "../../database/mysql";

const TABLE = "departments";

/**
 * Get `all` entries in the **departments table**
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
 * Get the entry with a specific `id` in the **departments table**
 *
 * @param DID the department id to query
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getUniqueViaID(DID: number) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${TABLE} WHERE DID = ${DID}`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * Adds to **departments table** the data with the standard information.
 *
 * such as `name, address, birthDay, phone, email, department, position, salary, password, isAdmin`
 * @param data data with the standard information
 *
 * **MUST CONTAIN: [name, address, birthDay, phone, email, department, position, salary, password, isAdmin]**
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
 * `remove a entry` in the **departments table** with specific `id`.
 *
 * @param DID the department's id to remove
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function remove(DID: number) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${TABLE} WHERE DID = ${DID}`, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

/**
 * **Patch** the information of a department
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
        WHERE DID = ${data.DID}; `,
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
