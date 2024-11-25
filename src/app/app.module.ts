import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { StudentsComponent } from './Layout/students/students.component';

import { LoginComponent } from './Layout/blank/login/login.component';
import { RegisterComponent } from './Components/manager/register/register.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { MarkAttendanceComponent } from './Components/manager/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from './Components/manager/view-attendance/view-attendance.component';
import { HomeComponent } from './Layout/blank/home/home.component';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';
import { ToastrModule } from 'ngx-toastr';

import { LoginregisterComponent } from './Layout/blank/loginregister/loginregister.component';
import { SetPasswordComponent } from './Components/set-password/set-password.component';
import { AdminComponent } from './RegisterComponents/admin/admin.component';
import { StaffRegistrationComponent } from './RegisterComponents/staff-registration/staff-registration.component';
import { StudentRegistrationComponent } from './RegisterComponents/student-registration/student-registration.component';
import { LoginsComponent } from './RegisterComponents/logins/logins.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    StudentsComponent,
    LoginComponent,
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
    RegisterComponent,
  
    LoginregisterComponent,
        SetPasswordComponent,
        AdminComponent,
        StaffRegistrationComponent,
        StudentRegistrationComponent,
        LoginsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
