import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Workout} from "../../model/Workout";
import {WorkoutService} from "../../service/workout.service";
import {ExerciseTemplate} from "../../model/ExerciseTemplate";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, map, switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-workout-session',
  templateUrl: './workout-session.component.html',
  styleUrls: ['./workout-session.component.css']
})
export class WorkoutSessionComponent implements OnInit {

  exerciseTemplates: ExerciseTemplate[] | undefined
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  workout$: Observable<Workout | null>
  workoutId: number | undefined

  @ViewChild('stopwatch') stopwatch: any
  time: String | undefined

  constructor(private workoutService: WorkoutService,
              private router: Router,
              private route: ActivatedRoute) {

    this.workout$ = this.route.paramMap.pipe(
      map(params => {
        const id = params.get('id') || '';
        return +id;
      }),
      switchMap(id => {
        this.workoutId = id
        return this.workoutService.getWorkoutById(id)
      }),
      catchError(err => {
        this.router.navigateByUrl('/add-workout')
        return of(null)
      })
    )
  }

  ngOnInit(): void {
    this.getAllExerciseTemplates();

    this.workoutService.refreshNeeded$
      .subscribe(() => {
        this.workout$ = this.workoutService.getWorkoutById(this.workoutId)
      })
  }

  deleteSet(exerciseId: number, setId: number) {
    this.workoutService.deleteSetForExerciseById(exerciseId, setId).subscribe(res => {
      console.log(res)
    });
  }

  getAllExerciseTemplates() {
    return this.workoutService.getAllExerciseTemplates().subscribe(res => {
      this.exerciseTemplates = res
    })
  }

  finishWorkout() {
    if (confirm("Are you sure you want to finish your workout session?")) {
      this.time = `${this.stopwatch.minutes}:${this.stopwatch.seconds}`

      this.workoutService.saveTimeForWorkout(this.workoutId, this.time).subscribe(res => {
        console.log(res)
      })
      this.router.navigate(['workouts'])
    }
  }
}
