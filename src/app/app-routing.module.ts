import { NgModule } from '@angular/core';
import {WorkoutListComponent} from "./components/workout-list/workout-list.component";
import {WorkoutComponent} from "./components/workout/workout.component";
import {RouterModule, Routes} from "@angular/router";
import {AddWorkoutComponent} from "./components/add-workout/add-workout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {TemplatesComponent} from "./components/templates/templates.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {WorkoutSessionComponent} from "./components/workout-session/workout-session.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'workouts', component: WorkoutListComponent},
  {path: 'workout/:id', component: WorkoutComponent},
  {path: 'add-workout', component: AddWorkoutComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'session/:id', component: WorkoutSessionComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
