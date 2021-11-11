import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Workout} from "../model/Workout";
import {ExerciseTemplate} from "../model/ExerciseTemplate";
import {WorkoutTemplate} from "../model/WorkoutTemplate";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  baseUrl = 'http://localhost:8080/api'

  private _refreshNeeded$ = new Subject<void>()

  get refreshNeeded$() {
    return this._refreshNeeded$
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('sehawa2511@gyn5.com:qwerty')
    })
  };

  constructor(private http: HttpClient) { }

  getAllWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}/workouts`, this.httpOptions)
  }

  getWorkoutById(workoutId: number | undefined): Observable<Workout> {
    return this.http.get<Workout>(`${this.baseUrl}/workouts/${workoutId}`, this.httpOptions)
  }

  getWorkoutByName(name: String): Observable<Workout> {
    return this.http.get<Workout>(`${this.baseUrl}/workouts/${name}`, this.httpOptions)
  }

  addWorkout(workoutName: String) {
    return this.http.post(`${this.baseUrl}/workouts`, workoutName, this.httpOptions)
  }

  addSetForWorkout(workoutId: number | undefined, exerciseId: number | undefined, value: any) {
    return this.http.post(`${this.baseUrl}/workouts/${workoutId}/exercise/${exerciseId}`, value, this.httpOptions)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      )
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
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      )
  }

  getAllWorkoutTemplates(): Observable<WorkoutTemplate[]> {
    return this.http.get<WorkoutTemplate[]>(`${this.baseUrl}/workout-templates`, this.httpOptions)
  }

  addWorkoutTemplate(workoutName: String) {
    return this.http.post(`${this.baseUrl}/workout-templates`, workoutName, this.httpOptions)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      )
  }

  startWorkoutFromTemplate(workoutTemplateId: String): Observable<Workout> {
    return <Observable<Workout>> this.http.post(`${this.baseUrl}/workouts/addFromTemplate/${workoutTemplateId}`,'',this.httpOptions)
  }

  saveTimeForWorkout(workoutId: number | undefined, time: String) {
    return this.http.post(`${this.baseUrl}/workouts/saveTime/${workoutId}`, time, this.httpOptions)
  }

  getAllFinishedWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}/workouts`, this.httpOptions)
  }
}
