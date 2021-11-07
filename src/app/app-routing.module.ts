import { NgModule } from '@angular/core';
import {WorkoutListComponent} from "./components/workout-list/workout-list.component";
import {WorkoutComponent} from "./components/workout/workout.component";
import {RouterModule, Routes} from "@angular/router";
import {AddWorkoutComponent} from "./components/add-workout/add-workout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {TemplatesComponent} from "./components/templates/templates.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'workouts', component: WorkoutListComponent},
  {path: 'workout/:id', component: WorkoutComponent},
  {path: 'add-workout', component: AddWorkoutComponent},
  {path: 'templates', component: TemplatesComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
