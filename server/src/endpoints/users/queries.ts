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
function getUniqueViaID(UID: number) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${TABLE} WHERE UID = ${UID}`,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
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
 * such as `name, address, birthDay, phone, email, team, position, salary, password, isAdmin`
 * @param data data with the standard information
 *
 * **MUST CONTAIN: [name, address, birthDay, phone, email, team, position, salary, password, isAdmin]**
 *
 * @returns the entries if the query is successfull otherwise returns a error
 */
function add(data: any) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${TABLE}
      (name, address, birthDay, phone, email, team, position, password, isAdmin)
      VALUES
      ("${data.name}",
      ${data.address},
      "${data.birthDay}",
      "${data.phone}",
      "${data.email}",
      "${data.team}",
      "${data.position}",
      "${data.password}",
      ${data.isAdmin})`,
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
function remove(UID: number) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${TABLE} WHERE UID = ${UID}`, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

/**
 * **Patch** the information of a user
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
      address = "${data.address}",
      birthDay = "${data.birthDay}",
      phone = "${data.phone}",
      email = "${data.email}",
      team = "${data.team}",
      position = "${data.position}",
      password = "${data.password}",
      isAdmin = ${data.isAdmin}
      
      WHERE UID = ${data.UID}; `,
      (err, res) => {
        return err ? reject(err) : resolve(res);
      }
    );
  });
}

export default {
  getAllEntries,
  getUniqueViaID,
  getUniqueViaLogin,
  add,
  remove,
  update,
};
