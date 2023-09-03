export interface Participation {
  set1: number;
  set2: number;
  set3: number;
}

export interface Game {
  startDataTime: string;
  court: string; //Change to Court
}

export type Gender = 'MAN' | 'WOMAN';

export type GroupType = 'SINGLE'|'MIX'|'DOUBLE';