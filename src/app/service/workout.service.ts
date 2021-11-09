import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Workout} from "../model/Workout";
import {ExerciseTemplate} from "../model/ExerciseTemplate";
import {WorkoutTemplate} from "../model/WorkoutTemplate";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  baseUrl = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('cepep91128@datakop.com:qwerty')
    })
  };

  constructor(private http: HttpClient) { }

  getAllWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}/workouts`, this.httpOptions)
  }

  getWorkoutById(workoutId: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.baseUrl}/workouts/${workoutId}`, this.httpOptions)
  }

  addWorkout(workoutName: String) {
    return this.http.post(`${this.baseUrl}/workouts`, workoutName, this.httpOptions)
  }

  addSetForWorkout(workoutId: number | undefined, exerciseId: number | undefined, value: any) {
    return this.http.post(`${this.baseUrl}/workouts/${workoutId}/exercise/${exerciseId}`, value, this.httpOptions)
  }

  addExerciseForWorkout(workoutId: number | undefined, value: any) {
    return this.http.post(`${this.baseUrl}/workouts/${workoutId}/exercise`, value, this.httpOptions)
  }

  deleteSetForExerciseById(exerciseId: number, setId: number) {
    return this.http.delete(`${this.baseUrl}/exercises/${exerciseId}/set/${setId}`, this.httpOptions)
  }

  getAllExerciseTemplates(): Observable<ExerciseTemplate[]> {
    return this.http.get<ExerciseTemplate[]>(`${this.baseUrl}/exercise-templates`, this.httpOptions)
  }

  addExerciseTemplate(exerciseName: String) {
    return this.http.post(`${this.baseUrl}/exercise-templates`, exerciseName, this.httpOptions)
  }

  getAllWorkoutTemplates(): Observable<WorkoutTemplate[]> {
    return this.http.get<WorkoutTemplate[]>(`${this.baseUrl}/workout-templates`, this.httpOptions)
  }

  addWorkoutTemplate(workoutName: String) {
    return this.http.post(`${this.baseUrl}/workout-templates`, workoutName, this.httpOptions)
  }

  startWorkoutFromTemplate(workoutTemplateId: String) {
    return this.http.post(`${this.baseUrl}/workouts/addFromTemplate/${workoutTemplateId}`,'',this.httpOptions)
  }
}
