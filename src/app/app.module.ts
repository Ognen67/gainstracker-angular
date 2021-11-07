import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WorkoutListComponent} from './components/workout-list/workout-list.component';
import {HttpClientModule} from "@angular/common/http";
import {WorkoutComponent} from './components/workout/workout.component';
import {AddWorkoutComponent} from './components/add-workout/add-workout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AddSetComponent} from './components/add-set/add-set.component';
import {AddExerciseComponent} from './components/add-exercise/add-exercise.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import { TemplatesComponent } from './components/templates/templates.component';
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutComponent,
    AddWorkoutComponent,
    HomePageComponent,
    AddSetComponent,
    AddExerciseComponent,
    HeaderComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
