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
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';

import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { MarkAttendanceComponent } from './Components/manager/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from './Components/manager/view-attendance/view-attendance.component';
import { HomeComponent } from './Layout/blank/home/home.component';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './Components/manager/courses/courses.component';
import { CourseaddComponent } from './Components/manager/courses/courseadd/courseadd.component';
import { CourseeditComponent } from './Components/manager/courses/courseedit/courseedit.component';

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
    StaffComponent,
    TimeTableComponent,
    TimeTableUpsertComponent,
    TimeTableViewComponent,
    MarkAttendanceComponent,
    ViewAttendanceComponent,
    HomeComponent,
    AttendanceComponent,
    CoursesComponent,
    CourseaddComponent,
    CourseeditComponent,
   

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
   
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
