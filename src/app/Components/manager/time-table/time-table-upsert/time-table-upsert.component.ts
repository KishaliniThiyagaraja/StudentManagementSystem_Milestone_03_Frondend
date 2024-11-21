import { TimertableService } from './../../../../../Services/timertable.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TimeTable } from '../../../../../Services/Model';

@Component({
  selector: 'app-time-table-upsert',
  templateUrl: './time-table-upsert.component.html',
  styleUrl: './time-table-upsert.component.css',
})
export class TimeTableUpsertComponent implements OnInit {
  timeTables: TimeTable[] = [];

  timeTableForm: any;

  constructor(
    private fb: FormBuilder,
    private TimertableService: TimertableService,
    private router: Router
  ) {
    this.timeTableForm = this.fb.group({
      course: [''],
      startTime: [''],
      endTime: [''],
      dueDate: [''],
      location : ['']
    });
  }

  onSubmit() {
    let timeTable = this.timeTableForm.value;
    console.log(this.timeTableForm.value)
    console.log(timeTable);
    this.TimertableService.createTable(timeTable)
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
