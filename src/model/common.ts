export interface Participation {
  set1: number;
  set2: number;
  set3: number;
}

export interface Game {
  startDataTime: string;
  court: string; //Change to Court
}

export type Gender = "MAN" | "WOMAN";

export type GroupType = "SINGLE" | "MIX" | "DOUBLE";

export type Role = "ADMIN" | "JUDGE" | "PLAYER";

export enum RegisterStatus {
  NO_GROUPS = "NO_GROUPS",
  USERS_REGISTER = "USERS_REGISTER",
  ADMIN_REGISTER = "ADMIN_REGISTER",
  CLOSED = "CLOSED",
}
