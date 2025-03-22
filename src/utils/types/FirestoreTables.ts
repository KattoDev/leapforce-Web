import type { Timestamp } from "firebase/firestore";

export interface UserData {
  name: string;
  email: string;
  phone: string;
  team: string;
  isAdmin: boolean;
}

export interface TaskData {
  name: string;
  description: string;
  endDate: Timestamp;
  responsible: string;
  project: string;
  isFinished: string;
}

export interface ProjectData {
  name: string;
  description: string;
  endDate: Timestamp;
  team: string;
  isFinished: boolean;
}

export interface TeamStructure {
  name: string;
}
