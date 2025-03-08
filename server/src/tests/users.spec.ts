import request from "supertest";
import app from "../app";

describe("Pruebas para el endpoint 'usuarios'", () => {
  test("Responder con toda la lista de usuarios", async () => {
    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", 200);
    expect(res.body).toHaveProperty("error", false);
  });
});
