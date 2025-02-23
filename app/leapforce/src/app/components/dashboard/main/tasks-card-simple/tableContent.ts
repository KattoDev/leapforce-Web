interface TaskTableElement {
  name: string;
  status: boolean;
  deadline: Date;
}

export const TASK_DATA: TaskTableElement[] = [
  { name: 'Task 1', status: true, deadline: new Date(2021, 11, 1) },
  { name: 'Task 2', status: false, deadline: new Date(2021, 11, 2) },
  { name: 'Task 3', status: true, deadline: new Date(2021, 11, 3) },
  { name: 'Task 4', status: false, deadline: new Date(2021, 11, 4) },
  { name: 'Task 5', status: true, deadline: new Date(2021, 11, 5) },
  { name: 'Task 6', status: false, deadline: new Date(2021, 11, 6) },
  { name: 'Task 7', status: true, deadline: new Date(2021, 11, 7) },
  { name: 'Task 8', status: false, deadline: new Date(2021, 11, 8) },
  { name: 'Task 9', status: true, deadline: new Date(2021, 11, 9) },
  { name: 'Task 10', status: false, deadline: new Date(2021, 11, 10) },
  { name: 'Task 11', status: true, deadline: new Date(2021, 11, 11) },
  { name: 'Task 12', status: false, deadline: new Date(2021, 11, 12) },
  { name: 'Task 13', status: true, deadline: new Date(2021, 11, 13) },
  { name: 'Task 14', status: false, deadline: new Date(2021, 11, 14) },
  { name: 'Task 15', status: true, deadline: new Date(2021, 11, 15) },
  { name: 'Task 16', status: false, deadline: new Date(2021, 11, 16) },
  { name: 'Task 17', status: true, deadline: new Date(2021, 11, 17) },
  { name: 'Task 18', status: false, deadline: new Date(2021, 11, 18) },
];

export const DISPLAYED_COLUMNS: string[] = ['name', 'status', 'deadline'];
