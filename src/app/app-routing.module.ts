import { NgModule, Version } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { ManagerComponent } from './Layout/manager/manager.component';

import { LoginComponent } from './Layout/blank/login/login.component';

import { BlankComponent } from './Layout/blank/blank.component';


import { LoginregisterComponent } from './Layout/blank/loginregister/loginregister.component';
import { StaffComponent } from './Components/staff/staff.component';

import { ViewStaffComponent } from './Components/staff/view-staff/view-staff.component';
import { StaffLectureComponent } from './Components/manager/add/staff-lecture/staff-lecture.component';
import { EnrollmentUpsertComponent } from './Components/manager/enrollment/enrollment-upsert/enrollment-upsert.component';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';
import { AdminExamsComponent } from './Components/Exam-Manage/admin-exams/admin-exams.component';
import { StudentExamsComponent } from './Components/Exam-Manage/student-exams/student-exams.component';
import { LecturerExamsComponent } from './Components/Exam-Manage/lecturer-exams/lecturer-exams.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginregisterComponent },
  { path: 'app-staff-lecture', component: StaffLectureComponent },
  { path: '', component: ViewStaffComponent },

  { path: 'app-attendance', component: AttendanceComponent },


  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route

  { path: 'app-admin-exams', component: AdminExamsComponent },
  { path: 'app-student-exams', component: StudentExamsComponent },
  { path: 'app-lecture-exams', component: LecturerExamsComponent },

  { path: '', redirectTo: '/exam-management', pathMatch: 'full'},


  { path: 'app-time-table-view', component: TimeTableViewComponent },
  { path: 'app-time-table-upsert', component: TimeTableUpsertComponent },

  { path: 'app-enrollment-upsert', component: EnrollmentUpsertComponent },
  // {path:'manage-attent',component:ManagerComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

