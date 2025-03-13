// import request from "supertest";
// import app from "../app";
// import { User } from "../web/globalInterfaces";
// import { addEntry, createRandomUser, loginUser } from "./Helpers/coreFuncs";

// describe("USERS ENDPOINT", () => {

//   let usersCreated: Array<{ email: string; password: string }> = [];
//   let usersCreatedUIDs: Array<number> = [];

//   test("POST - Crear 10 usuarios", async () => {
//     let users: Array<User> = []

//     for (let i = 0; i < 10; i++) {
//       users.push(createRandomUser())
//     }

//     users.forEach(async (user: User) => {
//       await addEntry(user, USER_ENDPOINT, "USER ADDED")
//       usersCreated.push({ email: user.email, password: user.password })
//     })

//     expect(usersCreated.length).toBe(10);
//   });

//   test("GET_VIA_LOGIN - Verificar los 10 usuarios creados", async () => {
//     const userPromises = usersCreated.map((user) => {
//       loginUser(user.email, user.password, USER_ENDPOINT).then((loggedUser: User) => {
//         usersCreatedUIDs.push(loggedUser.UID)
//       })
//     })
    
//     await Promise.all(userPromises);
//   });

//   test("PATCH - Modificar un usuario", async () => {
//     const User = {
//       name: `usuario a modificar`,
//       phone: Math.random() * (3229999999 - 3000000000) + 3000000000,
//       email: `mailsinmodificar@email.com`,
//       team: Math.random() * (6 - 1) + 1,
//       password: "password",
//       isAdmin: Math.random().toFixed(),
//     };

//     const postResponse = await request(app).post(USER_ENDPOINT).send(User);

//     expect(postResponse.statusCode).toBe(201);
//     expect(postResponse.body).toHaveProperty("status", 201);
//     expect(postResponse.body).toHaveProperty("body", "USER ADDED");

//     const getResponse = await request(app).get(
//       `${USER_ENDPOINT}/login/?email=${User.email}&password=${User.password}`
//     );

//     let UserUID = getResponse.body.body[0].UID;

//     expect(getResponse.statusCode).toBe(200);
//     expect(getResponse.body).toHaveProperty("status", 200);
//     expect(getResponse.body).toHaveProperty("error", false);
//     expect(getResponse.body.body[0]).toHaveProperty("email", User.email);
//     expect(getResponse.body.body[0]).toHaveProperty("password", User.password);

//     const UserPatched = {
//       UID: UserUID,
//       name: `usuario modificado`,
//       phone: Math.random() * (3229999999 - 3000000000) + 3000000000,
//       email: `mailmodificado@email.com`,
//       team: Math.random() * (6 - 1) + 1,
//       password: "password123",
//       isAdmin: Math.random().toFixed(),
//     };

//     const patchResponse = await request(app)
//       .patch(USER_ENDPOINT)
//       .send(UserPatched);

//     expect(patchResponse.statusCode).toBe(200);
//     expect(patchResponse.body).toHaveProperty("status", 200);
//     expect(patchResponse.body).toHaveProperty("error", false);
//     expect(patchResponse.body).toHaveProperty(
//       "body",
//       `UPDATED USER WITH UID ${UserPatched.UID}`
//     );

//     const deleteResponse = await request(app).delete(
//       `${USER_ENDPOINT}/${UserPatched.UID}`
//     );
//     expect(deleteResponse.statusCode).toBe(200);
//     expect(deleteResponse.body).toHaveProperty("status", 200);
//     expect(deleteResponse.body).toHaveProperty("error", false);
//     expect(deleteResponse.body).toHaveProperty(
//       "body",
//       `USER WITH UID ${UserPatched.UID} REMOVED`
//     );
//   });

//   test("DELETE - Eliminar los 10 usuarios creados", async () => {
//     const deletePromises = usersCreatedUIDs.map(async (UID: number) => {
//       const deleteResponse = await request(app).delete(
//         `${USER_ENDPOINT}/${UID}`
//       );
//       expect(deleteResponse.statusCode).toBe(200);
//       expect(deleteResponse.body).toHaveProperty("status", 200);
//       expect(deleteResponse.body).toHaveProperty("error", false);
//       expect(deleteResponse.body).toHaveProperty(
//         "body",
//         `USER WITH UID ${UID} REMOVED`
//       );
//     });

//     await Promise.all(deletePromises);
//   });
// });
