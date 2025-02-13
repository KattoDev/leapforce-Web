import { connection } from "../../database/mysql";

const TABLE = "users";

/**
 * Get `all` entries in the **users table**
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
 * Get the entry with a specific `id` in the **users table**
 *
 * @param id the user id to query
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getUniqueViaID(id: number) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${TABLE} WHERE UID = ${id}`, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

/**
 * Gets the entry with specific `email` and `password` in the **users table**
 *
 * @param email the user's email
 * @param password the user's password
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function getUniqueViaLogin(email: string, password: string) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${TABLE} WHERE email = "${email}" AND password = "${password}"`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * Adds to **users table** the data with the standard information.
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
      (name, address, birthDay, phone, email, department, position, salary, password, isAdmin)
      VALUES
      ("${data.name}",
      ${data.address},
      "${data.birthDay}",
      "${data.phone}",
      "${data.email}",
      "${data.department}",
      "${data.position}",
      "${data.salary}",
      "${data.password}",
      "${data.isAdmin}")`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

/**
 * `remove a entry` in the **users table** with specific `id`.
 *
 * @param id the user's id to remove
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function remove(id: number) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${TABLE} WHERE UID = ${id}`, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

export default {
  getAllEntries,
  getUniqueViaID,
  getUniqueViaLogin,
  add,
  remove,
};
