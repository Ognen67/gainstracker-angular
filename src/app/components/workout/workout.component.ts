import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Workout} from "../../model/Workout";
import {WorkoutService} from "../../service/workout.service";
import {ExerciseTemplate} from "../../model/ExerciseTemplate";

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  @Input() workout: Workout | undefined
  exerciseTemplates: ExerciseTemplate[] | undefined
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getAllExerciseTemplates();
  }

  deleteSet(exerciseId: number, setId: number) {
    return this.workoutService.deleteSetForExerciseById(exerciseId, setId).subscribe(res => {
      console.log(res)
    });
  }

  getAllExerciseTemplates() {
    return this.workoutService.getAllExerciseTemplates().subscribe(res => {
      this.exerciseTemplates = res
      console.log(res)
    })
  }
}
