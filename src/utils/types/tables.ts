export interface Table {
  tableHead: string[];
  tableBody: object;
}

export interface AllUsersTableBody {
  name: string;
  phone: number;
  email: string;
  isAdmin: string;
}

export interface AllUsersTable {
  tableHead: string[];
  tableBody: AllUsersTableBody[];
}
