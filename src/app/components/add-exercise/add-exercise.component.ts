import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkoutService} from "../../service/workout.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Exercise} from "../../model/Exercise";
import {ExerciseTemplate} from "../../model/ExerciseTemplate";

@Component({
  selector: 'add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  @Input() workoutId : number | undefined;
  @Input() exerciseTemplates : ExerciseTemplate[] | undefined;
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  exerciseForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(
    private workoutService: WorkoutService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.workoutService.addExerciseForWorkout(this.workoutId, this.exerciseForm.value).subscribe(res => {
      console.log(res)
    })
    console.log('Exercise name: ', this.exerciseForm.value);
    this.exerciseForm.reset();

    this.refresh.emit(true)
  }

}
