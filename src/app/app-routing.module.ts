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


const routes: Routes = [
  // {path:'login', component:LoginComponent},
  // {path:'', component:LoginregisterComponent},
  {path:'',component:StaffLectureComponent},
  {path:'',component:ViewStaffComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
