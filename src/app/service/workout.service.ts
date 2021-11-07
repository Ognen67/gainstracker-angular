import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Workout} from "../model/Workout";
import {ExerciseTemplate} from "../model/ExerciseTemplate";
import {WorkoutTemplate} from "../model/WorkoutTemplate";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  baseUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getAllWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}/workouts`)
  }

  getWorkoutById(workoutId: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}/workouts/${workoutId}`)
  }

  addWorkout(workoutName: String) {
    return this.http.post(`${this.baseUrl}/workouts`, workoutName)
  }

  addSetForWorkout(workoutId: number | undefined, exerciseId: number | undefined, value: any) {
    return this.http.post(`${this.baseUrl}/workouts/${workoutId}/exercise/${exerciseId}`, value)
  }

  addExerciseForWorkout(workoutId: number | undefined, value: any) {
    return this.http.post(`${this.baseUrl}/workouts/${workoutId}/exercise`, value)
  }

  deleteSetForExerciseById(exerciseId: number, setId: number) {
    return this.http.delete(`${this.baseUrl}/exercises/${exerciseId}/set/${setId}`)
  }

  getAllExerciseTemplates(): Observable<ExerciseTemplate[]> {
    return this.http.get<ExerciseTemplate[]>(`${this.baseUrl}/exercise-templates`)
  }

  addExerciseTemplate(exerciseName: String) {
    return this.http.post(`${this.baseUrl}/exercise-templates`, exerciseName)
  }

  getAllWorkoutTemplates(): Observable<WorkoutTemplate[]> {
    return this.http.get<WorkoutTemplate[]>(`${this.baseUrl}/workout-templates`)
  }

  addWorkoutTemplate(workoutName: String) {
    return this.http.post(`${this.baseUrl}/workout-templates`, workoutName)
  }
}
