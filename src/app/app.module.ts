import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { StudentsComponent } from './Layout/students/students.component';

import { LoginComponent } from './Layout/blank/login/login.component';

import { HeaderComponent } from './Layout/students/header/header.component';
import { FooterComponent } from './Layout/students/footer/footer.component';
import { SectionComponent } from './Layout/students/section/section.component';

import { ManagerComponent } from './Layout/manager/manager.component';
import { LecturesComponent } from './Layout/lectures/lectures.component';
import { StaffComponent } from './Layout/staff/staff.component';
import { TimeTableComponent } from './Components/manager/time-table/time-table.component';
import { TimeTableViewComponent } from './Components/manager/time-table/time-table-view/time-table-view.component';

import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeTableUpsertComponent } from './Components/manager/time-table/time-table-upsert/time-table-upsert.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginregisterComponent } from './Layout/blank/loginregister/loginregister.component';
import { LectureComponent } from './Components/lecture/lecture.component';
import { AddViewStudentComponent } from './Components/students/add-view-student/add-view-student.component';
import { AddEditStudentComponent } from './Components/students/add-edit-student/add-edit-student.component';
import { ViewStudentComponent } from './Components/students/view-student/view-student.component';
import { ViewLectureComponent } from './Components/lecture/view-lecture/view-lecture.component';
import { ViewStaffComponent } from './Components/staff/view-staff/view-staff.component';
import { AddEditStaffComponent } from './Components/staff/add-edit-staff/add-edit-staff.component';


@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    StudentsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    ManagerComponent,
    LecturesComponent,
    StaffComponent,
    TimeTableComponent,
    TimeTableUpsertComponent,
    TimeTableViewComponent,

    

  
    LoginregisterComponent,
                  LectureComponent,
                  AddViewStudentComponent,
                  AddEditStudentComponent,
                  ViewStudentComponent,
                  ViewLectureComponent,
                  ViewStaffComponent,
                  AddEditStaffComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
