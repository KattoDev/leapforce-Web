import { faker } from "@faker-js/faker";
import type { Task } from "../types/tasks";
import { formatDate } from "./dateFormatter";

function generateTasks(): Task {
  const fakedDate: Date = faker.date.anytime();
  return {
    name: faker.word.words(),
    status: true,
    deadline: formatDate(
      fakedDate.getDay(),
      fakedDate.getMonth(),
      fakedDate.getFullYear()
    ),
  };
}

export const fakedTasks: Array<Task> = Array.from({ length: 60 }, () =>
  generateTasks()
);
