import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkoutService} from "../../service/workout.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'add-set',
  templateUrl: './add-set.component.html',
  styleUrls: ['./add-set.component.css']
})
export class AddSetComponent implements OnInit {

  @Input() workoutId: number | undefined;
  @Input() exerciseId: number | undefined;
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  setForm = this.formBuilder.group({
    reps: ['', Validators.required],
    weight: ['', Validators.required]
  });

  constructor(
    private workoutService: WorkoutService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.workoutService.addSetForWorkout(this.workoutId, this.exerciseId, this.setForm.value).subscribe(res => {
      console.log(res)
    })
    console.log('Workout name: ', this.setForm.value);
    this.setForm.reset();

    this.refresh.emit(true)
  }

}
