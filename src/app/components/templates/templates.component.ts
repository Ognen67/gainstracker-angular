import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WorkoutService} from "../../service/workout.service";
import {ExerciseTemplate} from "../../model/ExerciseTemplate";
import {Router} from "@angular/router";
import {WorkoutTemplate} from "../../model/WorkoutTemplate";

@Component({
  selector: 'templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  exerciseForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  workoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    exercises: this.formBuilder.array([this.formBuilder.control('')]),
  });

  exerciseTemplates: ExerciseTemplate[] | undefined;
  workoutTemplates: WorkoutTemplate[] | undefined;

  constructor(
    private workoutService: WorkoutService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllExerciseTemplates();
    this.getAllWorkoutTemplates()
  }

  getAllExerciseTemplates() {
    return this.workoutService.getAllExerciseTemplates().subscribe(res => {
      this.exerciseTemplates = res;
    })
  }

  getAllWorkoutTemplates() {
    return this.workoutService.getAllWorkoutTemplates().subscribe(res => {
      this.workoutTemplates = res;
    })
  }

  onExerciseTemplateSubmit() {
    this.workoutService.addExerciseTemplate(this.exerciseForm.value).subscribe(res => {
      console.log(res)
    })
    this.exerciseForm.reset();
    this.router.navigate(['templates'])
  }

  onWorkoutTemplateSubmit() {
    console.log(this.workoutForm.value)

    this.workoutService.addWorkoutTemplate(this.workoutForm.value).subscribe(res => {
      console.log(res)
    })
    this.workoutForm.reset();
    this.router.navigate(['templates'])
  }

  get name() {
    return this.workoutForm.controls["name"] as FormControl
  }

  get exercises() {
    return this.workoutForm.controls["exercises"] as FormArray
  }

  addExercise() {
    // const exercisesForm = this.formBuilder.group({
    //   exerciseName: ['', Validators.required]
    // })
    // this.exercises.push(exercisesForm)

    this.exercises.push(this.formBuilder.control(''))
  }

  deleteExercise(i: number) {
    this.exercises.removeAt(i);
  }
}
