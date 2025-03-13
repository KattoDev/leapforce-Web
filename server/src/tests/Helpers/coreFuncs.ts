import request from "supertest";
import app from "../../app";
import { User } from "../../web/globalInterfaces";

export async function getAll(endpoint: string): Promise<void> {
  const response = await request(app).get(endpoint);

  expect(response.body).toHaveProperty("status", 201);
  expect(response.body).toHaveProperty("error", false);
  expect(response.body.length).toBeGreaterThanOrEqual(1)
}

export async function addEntry(
  data: User | any,
  endpoint: string,
  successMessage: string
): Promise<User | any> {
  const response = await request(app).post(endpoint).send(data);

  expect(response.body).toHaveProperty("status", 201);
  expect(response.body).toHaveProperty("error", false);
  expect(response.body).toHaveProperty("body", successMessage);

  return response.body;
}

export async function deleteEntry(
  ID: number,
  endpoint: string,
  successMessage: string
): Promise<void> {
  let deleteEndpoint: string = `${endpoint}/${ID}`;

  const response = await request(app).delete(deleteEndpoint);

  expect(response.body).toHaveProperty("status", 200);
  expect(response.body).toHaveProperty("error", false);
  expect(response.body).toHaveProperty("body", successMessage);
}

export async function patch(patch: User | any, endpoint: string, successMessage: string): Promise<void> {
  const response = await request(app)
      .patch(endpoint)
      .send(patch);

    expect(response.body).toHaveProperty("status", 200);
    expect(response.body).toHaveProperty("error", false);
    expect(response.body).toHaveProperty(
      "body",
      successMessage
    );
}