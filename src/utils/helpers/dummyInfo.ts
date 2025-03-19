import { faker } from '@faker-js/faker'
import type { Task } from '../interfaces/tasks'

function generateTasks(): Task {
  return {
    name: faker.word.words(),
    status: true.valueOf.toString(),
    deadline: faker.date.anytime().toISOString(),
  }
}

export const fakedTasks: Array<Task> = Array.from({ length: 30 }, () => generateTasks())
