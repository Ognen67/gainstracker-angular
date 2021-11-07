import { Component, OnInit } from '@angular/core';
import {WorkoutService} from "../../service/workout.service";
import {Workout} from "../../model/Workout";

@Component({
  selector: 'workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workoutList: Workout[] | undefined


  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.workoutService.getAllWorkouts().subscribe(res => {
      this.workoutList = res
    })
  }

}
