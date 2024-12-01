import { NgModule } from '@angular/core';
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
// {path:'',component:LoginComponent}
{path:'', component:CourseViewComponent},
{path:'course-view', component:CourseViewComponent},
{path:'course-add', component:CourseAddComponent},
{path:'app-course-edit',component:CourseEditComponent},
{path:'app-admin-exams',component:AdminExamsComponent},
{path:'app-lecturer-exams',component:LecturerExamsComponent},
{path:'app-student-exams',component:StudentExamsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

