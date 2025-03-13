import { User } from "../../web/globalInterfaces";
import {faker} from "@faker-js/faker"

export function generateRandomUser(): User {
    return {
        UID: 0,
        name: faker.person.fullName(),
        phone: parseInt(faker.phone.number({"style": "human"})),
        email: faker.internet.email(),
        team: faker.number.int({min: 1, max: 6}),
        password: faker.internet.password(),
        isAdmin: faker.datatype.boolean()
    }
}
