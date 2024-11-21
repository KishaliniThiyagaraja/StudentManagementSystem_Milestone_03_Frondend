import { NgModule, Version } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { ManagerComponent } from './Layout/manager/manager.component';
import { MarkAttendanceComponent } from './Components/manager/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from './Components/manager/view-attendance/view-attendance.component';
import { LoginComponent } from './Layout/blank/login/login.component';
import { RegisterComponent } from './Layout/blank/register/register.component';
import { BlankComponent } from './Layout/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
    
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path:'Manager',
    component:ManagerComponent,
    children:[
      {path : 'timetableview', component: TimeTableViewComponent},
      {path : 'timeTable', component: TimeTableComponent},
      {path : 'timetableform', component: TimeTableUpsertComponent},
      {path : 'layout-manager', component:ManagerComponent},
      { path: 'mark-attendance', component: MarkAttendanceComponent },
      { path: 'view-attendance', component: ViewAttendanceComponent },
      { path: '', redirectTo: '/mark-attendance', pathMatch: 'full' },
      {path : 'login',component:LoginComponent},
      {path : 'register',component:RegisterComponent},
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
