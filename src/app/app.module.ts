import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { AcademictrainingComponent } from './academictraining/academictraining.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProgramminglanguagesComponent } from './programminglanguages/programminglanguages.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkexperienceComponent,
    CoursesComponent,
    ContactComponent,
    AcademictrainingComponent,
    ProjectsComponent,
    ProgramminglanguagesComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
