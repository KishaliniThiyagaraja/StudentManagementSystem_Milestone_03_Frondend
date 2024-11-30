import { NgModule, Version } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { ManagerComponent } from './Layout/manager/manager.component';

import { LoginComponent } from './Layout/blank/login/login.component';

import { BlankComponent } from './Layout/blank/blank.component';


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
import { StaffComponent } from './Layout/staff/staff.component';
import { LecturesComponent } from './Layout/lectures/lectures.component';
import { StudentsComponent } from './Layout/students/students.component';
import { CourseViewComponent } from './Components/Courses/course-view/course-view.component';
import { CourseAddComponent } from './Components/Courses/course-add/course-add.component';
import { CourseEditComponent } from './Components/Courses/course-edit/course-edit.component';



const routes: Routes = [


   // Authentication Routes
   { path: '', component: LoginComponent },
   { path: 'app-time-table-upsert', component: TimeTableUpsertComponent },
   { path: 'app-admin-exams', component: AdminExamsComponent },
   { path: 'app-staff-lecture', component: StaffLectureComponent },
   { path: 'app-student-list', component: StudentListComponent },
   { path: 'app-course-view', component: CourseViewComponent },
{ path: 'app-course-add', component: CourseAddComponent}, // AddCourseComponent to be implemented
{ path: 'app-course-edit/edit/:id', component: CourseEditComponent} // EditCourseComponent to be implemented
 ];

   // Admin Routes
  //  {
  //    path: 'manager',
  //    component: ManagerComponent,
  //   //  canActivate: [AuthGuard, AdminGuard], // Admin-specific guards
  //    children: [
      //  { path: 'manage-courses', component: ManageCoursesComponent },
      //  { path: 'manage-exams', component: ManageExamsComponent },
      //  { path: 'app-time-table-upsert', component: TimeTableUpsertComponent },
      //  { path: 'app-admin-exams', component: AdminExamsComponent },
      //  { path: 'app-staff-lecture', component: StaffLectureComponent },
      //  { path: 'app-student-list', component: StudentListComponent },
  //    ],
  //  },
 
   // Staff Routes
//    {
//      path: 'staff',
//      component: StaffComponent,
//     //  canActivate: [AuthGuard, StaffGuard], // Staff-specific guards
//      children: [
//        { path: 'app-loginregister', component: LoginregisterComponent },
//       //  { path: 'enroll-student', component: EnrollStudentComponent },
//        { path: 'app-attendance', component: AttendanceComponent },
//        { path: 'app-student-list', component: StudentListComponent },
//      ],
//    },
 
//    // Lecturer Routes
//    {
//      path: 'lectures',
//      component: LecturesComponent,
//     //  canActivate: [AuthGuard, LecturerGuard], // Lecturer-specific guards
//      children: [
//        { path: 'app-lecturer-exams', component: LecturerExamsComponent},
//        { path: 'app-time-table-view', component: TimeTableViewComponent },
//        { path: 'app-student-list', component: StudentListComponent },
//      ],
//    },
 
//    // Student Routes
//    {
//      path: 'student',
//      component: StudentsComponent,
//     //  canActivate: [AuthGuard, StudentGuard], // Student-specific guards
//      children: [
//        { path: 'app-time-table-view', component: TimeTableViewComponent },
//        { path: 'app-student-exams', component: StudentExamsComponent },
//       //  { path: 'view-courses', component: ViewCoursesComponent },
//       //  { path: 'view-attendance', component: ViewAttendanceComponent },
//      ],
//    },
 
//    // Default Route
//    { path: 'app-login', redirectTo: '/login', pathMatch: 'full' },
 
//    // Fallback Route
//    { path: 'app-login', redirectTo: '/login' }, // Redirect invalid routes to login
 


// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

