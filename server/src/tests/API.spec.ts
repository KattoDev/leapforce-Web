import request from "supertest";
import app from "../app";

describe("USERS ENDPOINT", () => {
  const USER_ENDPOINT = "/users";

  let usersCreated: Array<{ email: string; password: string }> = [];
  let usersCreatedUIDs: Array<number> = [];

  test("GET ALL - Responder con toda la lista de usuarios", async () => {
    const res = await request(app).get(USER_ENDPOINT);
    const total_users: number = res.body.length;

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", 200);
    expect(res.body).toHaveProperty("error", false);
    expect(res.body).toHaveProperty("length", total_users);
  });

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

  test("PATCH - Modificar un usuario", async () => {
    const User = {
      name: `usuario a modificar`,
      phone: Math.random() * (3229999999 - 3000000000) + 3000000000,
      email: `mailsinmodificar@email.com`,
      team: Math.random() * (6 - 1) + 1,
      password: "password",
      isAdmin: Math.random().toFixed(),
    };

    const postResponse = await request(app).post(USER_ENDPOINT).send(User);

    expect(postResponse.statusCode).toBe(201);
    expect(postResponse.body).toHaveProperty("status", 201);
    expect(postResponse.body).toHaveProperty("body", "USER ADDED");

    const getResponse = await request(app).get(
      `${USER_ENDPOINT}/login/?email=${User.email}&password=${User.password}`
    );

    let UserUID = getResponse.body.body[0].UID;

    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.body).toHaveProperty("status", 200);
    expect(getResponse.body).toHaveProperty("error", false);
    expect(getResponse.body.body[0]).toHaveProperty("email", User.email);
    expect(getResponse.body.body[0]).toHaveProperty("password", User.password);

    const UserPatched = {
      UID: UserUID,
      name: `usuario modificado`,
      phone: Math.random() * (3229999999 - 3000000000) + 3000000000,
      email: `mailmodificado@email.com`,
      team: Math.random() * (6 - 1) + 1,
      password: "password123",
      isAdmin: Math.random().toFixed(),
    };

    const patchResponse = await request(app)
      .patch(USER_ENDPOINT)
      .send(UserPatched);

    expect(patchResponse.statusCode).toBe(200);
    expect(patchResponse.body).toHaveProperty("status", 200);
    expect(patchResponse.body).toHaveProperty("error", false);
    expect(patchResponse.body).toHaveProperty(
      "body",
      `UPDATED USER WITH UID ${UserPatched.UID}`
    );

    const deleteResponse = await request(app).delete(
      `${USER_ENDPOINT}/${UserPatched.UID}`
    );
    expect(deleteResponse.statusCode).toBe(200);
    expect(deleteResponse.body).toHaveProperty("status", 200);
    expect(deleteResponse.body).toHaveProperty("error", false);
    expect(deleteResponse.body).toHaveProperty(
      "body",
      `USER WITH UID ${UserPatched.UID} REMOVED`
    );
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
