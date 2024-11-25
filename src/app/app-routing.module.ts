import { NgModule, Version } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { ManagerComponent } from './Layout/manager/manager.component';
import { MarkAttendanceComponent } from './Components/manager/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from './Components/manager/view-attendance/view-attendance.component';
import { LoginComponent } from './Layout/blank/login/login.component';
import { RegisterComponent } from './Components/manager/register/register.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { HomeComponent } from './Layout/blank/home/home.component';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';
import { LoginregisterComponent } from './Layout/blank/loginregister/loginregister.component';
import { AdminComponent } from './RegisterComponents/admin/admin.component';
import { StaffRegistrationComponent } from './RegisterComponents/staff-registration/staff-registration.component';
import { StudentRegistrationComponent } from './RegisterComponents/student-registration/student-registration.component';
import { LoginsComponent } from './RegisterComponents/logins/logins.component';

const routes: Routes = [
  { path: 'attendance', component: AttendanceComponent },
  { path: '', redirectTo: '/attendance', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
