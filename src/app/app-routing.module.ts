import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { LoginComponent } from './Layout/blank/login/login.component';
import { LoginregisterComponent } from './Layout/blank/loginregister/loginregister.component';
import { ViewStaffComponent } from './Components/staff/view-staff/view-staff.component';
import { StaffLectureComponent } from './Components/manager/add/staff-lecture/staff-lecture.component';
import { EnrollmentUpsertComponent } from './Components/manager/enrollment/enrollment-upsert/enrollment-upsert.component';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';
import { AdminExamsComponent } from './Components/Exam-Manage/admin-exams/admin-exams.component';
import { StudentExamsComponent } from './Components/Exam-Manage/student-exams/student-exams.component';
import { LecturerExamsComponent } from './Components/Exam-Manage/lecturer-exams/lecturer-exams.component';
import { StudentListComponent } from './Components/students/student-list/student-list.component';
import { ViewLectureComponent } from './Components/lecture/view-lecture/view-lecture.component';
import { CourseViewComponent } from './Components/Courses/course-view/course-view.component';
import { CourseAddComponent } from './Components/Courses/course-add/course-add.component';
import { CourseEditComponent } from './Components/Courses/course-edit/course-edit.component';
import { DshboardComponent } from './Layout/dshboard/dshboard.component';
import { CardComponent } from './Layout/dshboard/card/card.component';
import { HeaderComponent } from './Layout/dshboard/header/header.component';
import { SidebarComponent } from './Layout/dshboard/sidebar/sidebar.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { ManagerDashboardComponent } from './Layout/manager-dashboard/manager-dashboard.component';
import { StaffDashboardComponent } from './Layout/staff-dashboard/staff-dashboard.component';
import { LectureDashboardComponent } from './Layout/lecture-dashboard/lecture-dashboard.component';
import { StudentDashboardComponent } from './Layout/student-dashboard/student-dashboard.component';
import { LandingpageComponent } from './Components/LandingPage/landingpage/landingpage.component';
import { LpContactComponent } from './Components/LandingPage/lp-contact/lp-contact.component';
import { LpCourseComponent } from './Components/LandingPage/lp-course/lp-course.component';
import { HomeComponent } from './Components/LandingPage/home/home.component';

//dashboard/manager/timetable/add


const routes: Routes = [
  {
    path: '',
    component: BlankComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: LoginregisterComponent },
    ]
  },
  {
    path: 'dashboard', component: DshboardComponent, children: [
      {
        path: 'manager', component: ManagerDashboardComponent, children: [
          {
            path: 'timetable', children: [
              { path: '', component: TimeTableComponent },
              { path: 'add', component: TimeTableUpsertComponent },
              { path: 'view', component: TimeTableViewComponent }
            ]
          }, { path: 'register', component: LoginregisterComponent }
        ]
      },
      {
        path: 'staff', children: [
          {
            path: '', children: [
              { path: '', component: StaffDashboardComponent },
              { path: 'add', component: ViewStaffComponent },
              { path: 'view', component: ViewStaffComponent }
            ]
          },
        ]
      },
      {
        path: 'lecturer', children: [
          {
            path: '', children: [
              { path: '', component: TimeTableComponent },
              { path: 'add', component: ViewLectureComponent },
              { path: 'view', component: ViewLectureComponent }
            ]
          }
        ]
      },
      {
        path: 'student', children: [
          {
            path: '', children: [
              { path: '', component: StudentDashboardComponent },
              { path: 'view', component: StudentListComponent }
            ]
          }
        ]
      },
      {
        path: 'course', children: [
          {
            path: '', children: [
              { path: '', component: CourseViewComponent },
              { path: 'add', component: CourseAddComponent },
              { path: 'edit', component: CourseEditComponent }
            ]
          }
        ]
      }
    ]
  },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'admin-exam', component: AdminExamsComponent },
  { path: 'lecturer-exam', component: LecturerExamsComponent },
  { path: 'student-exam', component: StudentExamsComponent },
  { path: 'course-add', component: CourseAddComponent },
  { path: 'course-edit', component: CourseEditComponent },
  { path: 'courseView', component: CourseViewComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'student', component: StudentListComponent },
  { path: 'staff', component: ViewStaffComponent },
  { path: 'lecturer', component: ViewLectureComponent },
  { path: 'enrollment', component: EnrollmentUpsertComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

