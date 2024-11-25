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
  // {
  //   path: '',
  //   component: BlankComponent,
  //   children: [

  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterComponent
  //     },
  //     { path: 'home', component: HomeComponent },
  //   ]
  // },
  // {
  //   path:'Manager',
  //   component:ManagerComponent,
  //   children:[
  //     {path : 'timetableview', component: TimeTableViewComponent},
  //     {path : 'timeTable', component: TimeTableComponent},
  //     {path : 'timetableform', component: TimeTableUpsertComponent},
  //     {path : 'layout-manager', component:ManagerComponent},
  //     { path: 'mark-attendance', component: MarkAttendanceComponent },
  //     { path: 'view-attendance', component: ViewAttendanceComponent },
  //     {path:'list-attendance' , component : AttendanceComponent},
  //     { path: '', redirectTo: '/mark-attendance', pathMatch: 'full' },
  //   ]
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'staff-register', component: StaffRegistrationComponent },
  { path: 'student-register', component: StudentRegistrationComponent },
  { path: 'logins', component: LoginsComponent },
  // {path: '', redirectTo: 'login',pathMatch:'full'},
  // {path: 'login',           component: LoginComponent},
  // {path: 'register',        component: LoginregisterComponent},
  // {path: 'dashboard',       component: DashboardComponent},
  // {path: 'forgotPassword',  component: ForgotPasswordComponent},
  // {path: 'addStudent',      component: AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
