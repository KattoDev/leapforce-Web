import request from "supertest";
import app from "../app";

describe("Pruebas para el endpoint 'USERS'", () => {
  const USER_ENDPOINT = "/users";

  test("GET ALL - Responder con toda la lista de usuarios", async () => {
    const res = await request(app).get(USER_ENDPOINT);

    const total_users: number = res.body.length;

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", 200);
    expect(res.body).toHaveProperty("error", false);
    expect(res.body).toHaveProperty("length", total_users);
  });

  let usersCreated: Array<{ email: string; password: string }> = [];
  let usersCreatedUIDs: Array<number> = [];

  test("POST - Crear 10 usuarios", async () => {
    for (let user = 0; user < 10; user++) {
      const postResponse = await request(app)
        .post(USER_ENDPOINT)
        .send({
          name: `usuario ${user}`,
          phone: Math.random() * (3229999999 - 3000000000) + 3000000000,
          email: `mail${user}@email.com`,
          team: Math.random() * (6 - 1) + 1,
          password: "password",
          isAdmin: Math.random().toFixed(),
        });

      expect(postResponse.statusCode).toBe(201);
      expect(postResponse.body).toHaveProperty("status", 201);
      expect(postResponse.body).toHaveProperty("body", "USER ADDED");

      usersCreated.push({
        email: `mail${user}@email.com`,
        password: "password",
      });
    }

    expect(usersCreated.length).toBe(10);
  });

  test("GET_VIA_LOGIN - Verificar los 10 usuarios creados", async () => {
    const userPromises = usersCreated.map(async (user) => {
      const getResponse = await request(app).get(
        `${USER_ENDPOINT}/login/?email=${user.email}&password=${user.password}`
      );
      expect(getResponse.statusCode).toBe(200);
      expect(getResponse.body).toHaveProperty("status", 200);
      expect(getResponse.body).toHaveProperty("error", false);
      expect(getResponse.body.body[0]).toHaveProperty("email", user.email);
      expect(getResponse.body.body[0]).toHaveProperty(
        "password",
        user.password
      );

      usersCreatedUIDs.push(getResponse.body.body[0].UID);
    });

    await Promise.all(userPromises);
  });

  test("DELETE - Eliminar los 10 usuarios creados", async () => {
    const deletePromises = usersCreatedUIDs.map(async (UID: number) => {
      const deleteResponse = await request(app).delete(
        `${USER_ENDPOINT}/${UID}`
      );
      expect(deleteResponse.statusCode).toBe(200);
      expect(deleteResponse.body).toHaveProperty("status", 200);
      expect(deleteResponse.body).toHaveProperty("error", false);
      expect(deleteResponse.body).toHaveProperty(
        "body",
        `USER WITH UID ${UID} REMOVED`
      );
    });

    await Promise.all(deletePromises);
  });
});

describe("Pruebas para el endpoint 'TEAMS'", () => {
  test("Responder con la lista de equipos", async () => {
    const res = await request(app).get("/teams");

    const total_teams: number = res.body.length;

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", 200);
    expect(res.body).toHaveProperty("error", false);
    expect(res.body).toHaveProperty("length", total_teams);
  });
});
