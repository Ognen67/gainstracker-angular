import {Component, OnInit} from '@angular/core';
import {WorkoutService} from "../../service/workout.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {WorkoutTemplate} from "../../model/WorkoutTemplate";

@Component({
  selector: 'add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {

  workoutForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  chooseTemplateForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  workoutTemplates: WorkoutTemplate[] | undefined;

  constructor(
    private workoutService: WorkoutService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllWorkoutTemplates()
  }

  onSubmit(): void {
    this.workoutService.addWorkout(this.workoutForm.value).subscribe(res => {
      console.log(res)
    })
    console.log('Workout name: ', this.workoutForm.value);
    this.workoutForm.reset();
    this.router.navigate(['workouts'])
  }

  onTemplateSubmit() {

  }

  getAllWorkoutTemplates() {
    return this.workoutService.getAllWorkoutTemplates().subscribe(res => {
      this.workoutTemplates = res
      console.log(res)
    })
  }
}
