import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { ManagerComponent } from './Layout/manager/manager.component';

const routes: Routes = [
  {
    path:'Manager',
    component:ManagerComponent,
    children:[
      {path : 'timetableview', component: TimeTableViewComponent},
      {path : 'timeTable', component: TimeTableComponent},
      {path : 'timetableform', component: TimeTableUpsertComponent},
      {path : 'layout-manager', component:ManagerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
