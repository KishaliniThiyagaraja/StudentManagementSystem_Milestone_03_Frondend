import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { StudentsComponent } from './Layout/students/students.component';

import { LoginComponent } from './Layout/blank/login/login.component';
import { RegisterComponent } from './Layout/blank/register/register.component';
import { HeaderComponent } from './Layout/students/header/header.component';
import { FooterComponent } from './Layout/students/footer/footer.component';
import { SectionComponent } from './Layout/students/section/section.component';

import { ManagerComponent } from './Layout/manager/manager.component';
import { LecturesComponent } from './Layout/lectures/lectures.component';
import { StaffComponent } from './Layout/staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    StudentsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    ManagerComponent,
    LecturesComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
