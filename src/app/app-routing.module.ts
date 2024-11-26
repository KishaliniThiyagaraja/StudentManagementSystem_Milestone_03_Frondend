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
import { AttendanceFormComponent } from './Components/manager/attendance/attendance-form/attendance-form.component';
import { AttendanceViewComponent } from './Components/manager/attendance/attendance-view/attendance-view.component';
import { EnrollmentUpsertComponent } from './Components/manager/enrollment/enrollment-upsert/enrollment-upsert.component';


const routes: Routes = [
  // {path:'login', component:LoginComponent},
  // {path:'', component:LoginregisterComponent},
  // {path:'app-staff-lecture',component:StaffLectureComponent},
  // {path:'',component:ViewStaffComponent},

  // { path: 'attendance-form', component: AttendanceFormComponent },
  // { path: 'attendance-view', component: AttendanceViewComponent },
  // { path: '', redirectTo: '/attendance-form', pathMatch: 'full' },


  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  

  // {path:'app-time-table-view',component:TimeTableViewComponent},
  // {path:'app-time-table-upsert',component:TimeTableUpsertComponent},


  // {path:'app-enrollment-upsert',component:EnrollmentUpsertComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
