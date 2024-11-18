import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponentComponent } from './Layout/blank.component/blank.component.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { StudentsComponent } from './Layout/students/students.component';
import { AdminComponent } from './Layout/admin/admin.component';
import { ManagerComponent } from './Layout/admin/manager/manager.component';
import { LecturesComponent } from './Layout/admin/lectures/lectures.component';
import { StaffComponent } from './Layout/admin/staff/staff.component';
import { LoginComponent } from './Layout/blank/login/login.component';
import { RegisterComponent } from './Layout/blank/register/register.component';
import { HeaderComponent } from './Layout/students/header/header.component';
import { FooterComponent } from './Layout/students/footer/footer.component';
import { SectionComponent } from './Layout/students/section/section.component';
import { TimeTableComponent } from './Layout/admin/time-table/time-table.component';
import { CoursesComponent } from './Layout/admin/courses/courses.component';
import { UsersComponent } from './Layout/admin/users/users.component';
import { EnrollmentComponent } from './Layout/admin/enrollment/enrollment.component';
import { ExamComponent } from './Layout/admin/exam/exam.component';
import { AttendanceComponent } from './Layout/admin/attendance/attendance.component';
import { TimeTableUpsertComponent } from './Layout/admin/time-table/time-table-upsert/time-table-upsert.component';
import { TimeTableViewComponent } from './Layout/admin/time-table/time-table-view/time-table-view.component';
import { CoursesUpsertComponent } from './Layout/admin/courses/courses-upsert/courses-upsert.component';
import { CoursesViewComponent } from './Layout/admin/courses/courses-view/courses-view.component';
import { UsersUpsertComponent } from './Layout/admin/users/users-upsert/users-upsert.component';
import { UsersViewComponent } from './Layout/admin/users/users-view/users-view.component';
import { EnrollmentUpsertComponent } from './Layout/admin/enrollment/enrollment-upsert/enrollment-upsert.component';
import { EnrollmentViewComponent } from './Layout/admin/enrollment/enrollment-view/enrollment-view.component';
import { ExamUpsertComponent } from './Layout/admin/exam/exam-upsert/exam-upsert.component';
import { MarksUpsertComponent } from './Layout/admin/exam/marks-upsert/marks-upsert.component';
import { MarksViewComponent } from './Layout/admin/exam/marks-view/marks-view.component';
import { ExamViewComponent } from './Layout/admin/exam/exam-view/exam-view.component';
import { AttendanceViewComponent } from './Layout/admin/attendance/attendance-view/attendance-view.component';
import { AttendanceReportComponent } from './Layout/admin/attendance/attendance-report/attendance-report.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponentComponent,
    BlankComponent,
    StudentsComponent,
    AdminComponent,
    ManagerComponent,
    LecturesComponent,
    StaffComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    TimeTableComponent,
    CoursesComponent,
    UsersComponent,
    EnrollmentComponent,
    ExamComponent,
    AttendanceComponent,
    TimeTableUpsertComponent,
    TimeTableViewComponent,
    CoursesUpsertComponent,
    CoursesViewComponent,
    UsersUpsertComponent,
    UsersViewComponent,
    EnrollmentUpsertComponent,
    EnrollmentViewComponent,
    ExamUpsertComponent,
    MarksUpsertComponent,
    MarksViewComponent,
    ExamViewComponent,
    AttendanceViewComponent,
    AttendanceReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
