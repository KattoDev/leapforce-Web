export interface User {
  UID: number;
  name: string;
  phone: number;
  email: string;
  team: number;
  password: string;
  isAdmin: boolean;
}

export interface Team {
  TMID: number;
  name: string;
  projects?: Array<number>;
}
