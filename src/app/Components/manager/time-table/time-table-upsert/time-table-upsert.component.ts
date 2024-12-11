import { TimeTableService } from '../../../../Services/time-table.service';
import { Course, TimeTable } from './../../../../../model';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CourseService } from '../../../../Services/course.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-time-table-upsert',
  templateUrl: './time-table-upsert.component.html',
  styleUrl: './time-table-upsert.component.css',
})
export class TimeTableUpsertComponent implements OnInit {
  timeTables: TimeTable[] = [];

  timeTableForm: FormGroup;
  timeTableEntries: TimeTableEntry[] = [];
  courses!: Course[]
  constructor(
    private fb: FormBuilder,
    private timeTableService: TimeTableService,
    private courseService: CourseService,
    private router: Router
  ) {
    this.timeTableForm = this.fb.group({
      courseId: ['', Validators.required],
      dueDate: ['', Validators.required],
      day: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      // class: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getCourses();
  }

  onSubmit() {
    let timeTable = this.timeTableForm.value;
    console.log(this.timeTableForm.value)
    // console.log(timeTable);
    const datePipe = new DatePipe('en-US');
    const formattedStartTime = datePipe.transform(this.timeTableForm.value.startTime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    const formattedEndTime = datePipe.transform(this.timeTableForm.value.endTime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    const newEntry: any = {
      startTime: formattedStartTime,
      endTime: formattedEndTime
      // classType: timeTable.class
    };
    console.log(this.timeTableForm.value.courseId)
    this.timeTableService.createTable(newEntry,this.timeTableForm.value.courseId )
      .subscribe((data: any) => {
        console.log(data);
      });
    this.timeTableForm.reset(); // Reset the form
  }
  getCourses() {
    this.courseService.getCourse().subscribe(data => {
      console.log(data);
      this.courses = data;
    })
  }

}

export interface TimeTableEntry {
  course: string;
//  dueDate: string;
 // day: string;
  startTime: string;
  endTime: string;
  // classType: string;
}