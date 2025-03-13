import request from "supertest";
import app from "../../app";
import { User } from "../../web/globalInterfaces";
import { deleteEntry } from "./coreFuncs";

export async function loginUser(
  email: string,
  password: string,
  usersEndpoint: string
): Promise<User> {
  let endpoint: string = `${usersEndpoint}/login/?email=${email}&password=${password}`;

  const response = await request(app).get(endpoint);

  expect(response.body).toHaveProperty("status", 200);
  expect(response.body).toHaveProperty("error", false);
  expect(response.body.body[0]).toHaveProperty("email", email);
  expect(response.body.body[0]).toHaveProperty("password", password);

  return response.body.body[0];
}

export function clearUsers(UID: number, USERS_ENDPOINT: string) {
    deleteEntry(UID, USERS_ENDPOINT, `USER WITH UID ${UID} REMOVED`);
  }
  