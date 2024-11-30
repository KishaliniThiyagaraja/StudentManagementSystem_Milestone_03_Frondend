import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { LoginComponent } from './Layout/blank/login/login.component';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginregisterComponent } from './Layout/blank/loginregister/loginregister.component';
import { ViewLectureComponent } from './Components/lecture/view-lecture/view-lecture.component';
import { ViewStaffComponent } from './Components/staff/view-staff/view-staff.component';
import { StaffLectureComponent } from './Components/manager/add/staff-lecture/staff-lecture.component';
import { StudentListComponent } from './Components/students/student-list/student-list.component';
import { EnrollmentUpsertComponent } from './Components/manager/enrollment/enrollment-upsert/enrollment-upsert.component';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';
import { AdminExamsComponent } from './Components/Exam-Manage/admin-exams/admin-exams.component';
import { LecturerExamsComponent } from './Components/Exam-Manage/lecturer-exams/lecturer-exams.component';
import { StudentExamsComponent } from './Components/Exam-Manage/student-exams/student-exams.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CourseAddComponent } from './Components/Courses/course-add/course-add.component';
import { CourseEditComponent } from './Components/Courses/course-edit/course-edit.component';
import { CourseViewComponent } from './Components/Courses/course-view/course-view.component';



import { ReactiveFormsModule } from '@angular/forms';
import { DshboardComponent } from './Layout/dshboard/dshboard.component';
import { StudentDashboardComponent } from './Layout/student-dashboard/student-dashboard.component';
import { ManagerDashboardComponent } from './Layout/manager-dashboard/manager-dashboard.component';
import { StaffDashboardComponent } from './Layout/staff-dashboard/staff-dashboard.component';
import { LectureDashboardComponent } from './Layout/lecture-dashboard/lecture-dashboard.component';
import { CardComponent } from './Layout/dshboard/card/card.component';
import { HeaderComponent } from './Layout/dshboard/header/header.component';
import { SidebarComponent } from './Layout/dshboard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,

    LoginComponent,





    
    TimeTableComponent,
    TimeTableUpsertComponent,
    TimeTableViewComponent,

    AttendanceComponent,


    EnrollmentUpsertComponent,
    LoginregisterComponent,


    ViewLectureComponent,
    ViewStaffComponent,
    StaffLectureComponent,

    StudentListComponent,
    AttendanceComponent,
    AdminExamsComponent,
    LecturerExamsComponent,
    StudentExamsComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseViewComponent,
    DshboardComponent,
    StudentDashboardComponent,
    ManagerDashboardComponent,
    StaffDashboardComponent,
    LectureDashboardComponent,
    CardComponent,
    HeaderComponent,
    SidebarComponent,
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
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,

  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
