import { TimeTableService } from './../../../../time-table.service';
import { TimeTable } from './../../../../../model';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@Component({
  selector: 'app-time-table-upsert',
  templateUrl: './time-table-upsert.component.html',
  styleUrl: './time-table-upsert.component.css',
})
export class TimeTableUpsertComponent implements OnInit {
  timeTables: TimeTable[] = [];

  timeTableForm: FormGroup;
  timeTableEntries: TimeTableEntry[] = [];

  constructor(
    private fb: FormBuilder,
    private timeTableService : TimeTableService,
    private router: Router
  ) {
    this.timeTableForm = this.fb.group({
      course: ['', Validators.required],
      dueDate: ['', Validators.required],
      day: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      class: ['', Validators.required],
    });
  }

  onSubmit() {
    let timeTable = this.timeTableForm.value;
    // console.log(this.timeTableForm.value)
    // console.log(timeTable);
    const newEntry: TimeTableEntry = {
      course: timeTable.course,
      dueDate: timeTable.dueDate,
      day: timeTable.day,
      startTime: timeTable.startTime,
      endTime: timeTable.endTime,
      classType: timeTable.class
    };
    this.timeTableEntries.push(newEntry); // Add to the array
      this.timeTableForm.reset(); // Reset the form

    this.timeTableService.createTable(timeTable)
    .subscribe((data: any) => {
     // this.router.navigate(['/timetableview']);
      console.log(data);
    });


  }

  ngOnInit(): void {
    this.timeTableService.getTables().subscribe(data =>{
    this.timeTables =data;
   })

  }
}

export interface TimeTableEntry {
  course: string;
  dueDate: string;
  day: string;
  startTime: string;
  endTime: string;
  classType: string;
}