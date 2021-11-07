import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
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
    exercises: [''],
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

      console.log(this.exerciseTemplates)
    })
  }

  getAllWorkoutTemplates() {
    return this.workoutService.getAllWorkoutTemplates().subscribe(res => {
      this.workoutTemplates = res;

      console.log(this.workoutTemplates)
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
    this.workoutService.addWorkoutTemplate(this.exerciseForm.value).subscribe(res => {
      console.log(res)
    })
    this.exerciseForm.reset();
    this.router.navigate(['templates'])
  }
}
