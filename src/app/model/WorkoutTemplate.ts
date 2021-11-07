import {Exercise} from "./Exercise";

export interface WorkoutTemplate {
  id: number,
  name: string,
  exercises: Exercise[]
}
