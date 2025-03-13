import { USERS_ENDPOINT } from "./config/endpoints";
import { generateRandomUser } from "./Helpers/fakeInfoGenerator";
import { User } from "../web/globalInterfaces";
import { addEntry, deleteEntry, getAll, patch } from "./Helpers/coreFuncs";
import { clearUsers, loginUser } from "./Helpers/usersFuncs";

describe("USERS - obtener usuarios", () => {
  let usersCreatedUIDs: number[] = [];
  let usersCreated: Array<User> = [];

  afterAll(() => {
    if (usersCreatedUIDs.length > 1) {
      usersCreatedUIDs.forEach((UID: number) => {
        clearUsers(UID, USERS_ENDPOINT);
      });
    }
  });

  test("Must get the full list of users", async () => {
    getAll(USERS_ENDPOINT);
  });

  test("Must add 10 users", async () => {
    do {
      usersCreated.push(generateRandomUser());
    } while (usersCreated.length != 10);

    usersCreated.forEach(async (user: User) => {
      await addEntry(user, USERS_ENDPOINT, "USER ADDED");
    });
  });

  test("Must get 10 user [email & password]", async () => {
    usersCreated.forEach(async (user: User) => {
      loginUser(user.email, user.password, USERS_ENDPOINT).then(
        (userFound: User) => {
          usersCreatedUIDs.push(userFound.UID);
        }
      );
    });
  });

  test("Must modify 10 users", async () => {
    for (let i = 10; i <= 10; i++) {
      const newUserData = generateRandomUser();
      usersCreated[i].UID = usersCreatedUIDs[i];
      usersCreated[i].name = newUserData.name;
    }

    usersCreated.forEach((user: User) => {
      patch(user, USERS_ENDPOINT, `UPDATED USER WITH UID ${user.UID}`);
    });
  });

  test("Must delete 10 users", async () => {
    usersCreatedUIDs.forEach((UID: number) => {
      clearUsers(UID, USERS_ENDPOINT);
      usersCreatedUIDs.shift()
    });
  });
});
