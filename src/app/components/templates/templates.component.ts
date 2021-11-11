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

  exerciseForm = this.fb.group({
    name: ['', Validators.required],
  });

  workoutForm = this.fb.group({
    name: ['', Validators.required],
    exercises: this.fb.array([
      this.fb.group({
        name: ['', Validators.required]
      })
    ]),
  });

  exerciseTemplates: ExerciseTemplate[] | undefined;
  workoutTemplates: WorkoutTemplate[] | undefined;

  constructor(
    private workoutService: WorkoutService,
    private fb: FormBuilder,
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

    if (this.exerciseForm.value.name == "Chest Press") {
      if (confirm("Did you mean \"Bench Press\"?")) {
        this.exerciseForm.value.name = "Bench Press"
        this.workoutService.addExerciseTemplate(this.exerciseForm.value).subscribe(res => {
          console.log(res)
        })
        this.exerciseForm.reset();
        this.router.navigate(['templates'])
      }
    } else {
      this.workoutService.addExerciseTemplate(this.exerciseForm.value).subscribe(res => {
        console.log(res)
      })
      this.exerciseForm.reset();
      this.router.navigate(['templates'])
    }
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

    const exGroup = this.fb.group({
      name: ['', Validators.required]
    })

    this.exercises.push(exGroup)
  }

  deleteExercise(i: number) {
    this.exercises.removeAt(i);
  }
}
