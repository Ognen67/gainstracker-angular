import {Component, Input, OnInit} from '@angular/core';
import {Workout} from "../../model/Workout";
import {WorkoutService} from "../../service/workout.service";

@Component({
  selector: 'app-workout-session',
  templateUrl: './workout-session.component.html',
  styleUrls: ['./workout-session.component.css']
})
export class WorkoutSessionComponent implements OnInit {

  // @Input() workoutId: number
  workout: Workout | undefined


  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    // this.getWorkoutById(this.workoutId)
  }

  getWorkoutById(workoutId: number): void {
    this.workoutService.getWorkoutById(workoutId).subscribe(res => {
      this.workout = res
    })
  }

}
