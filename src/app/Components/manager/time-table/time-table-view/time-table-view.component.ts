import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TimeTableService } from '../../../../Services/time-table.service';


@Component({
  selector: 'app-time-table-view',
  templateUrl: './time-table-view.component.html',
  styleUrl: './time-table-view.component.css'
})
export class TimeTableViewComponent implements OnInit {
  now: any;
  weekNo: number = 0;
  year: number = 0;
  constructor(private router: Router, private timeTableService: TimeTableService) {
    this.now = new Date();
    this.weekNo = this.getWeek(this.now);
    this.year = this.now.getFullYear();
    this.getWeeklyData();
  }
  userRole: string = '';
  timeTables: any[] = [];
  timeTableData0 : any = '';
  heading0 : string = '';
  heading1 : string = '';
  timeTableData1: any = '';
  dateReq: any = '';
  init: boolean = true;

  getWeeklyData() {
    this.timeTableService.getTablesbyWeekNo(this.weekNo, this.year).subscribe(data => {
      console.log(data);
      this.timeTableData0 = data[0];
      let table1 : any = (data[0]);
      let table2 : any = (data[1]);
      this.heading0 = table1[0]?.batch;
      if(table2){
        this.heading1 = table2[0]?.batch
      }
      console.log(this.heading0);
      console.log(this.heading1)
      this.timeTableData1 = data[1];
    })
  }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role') || '';
    console.log(this.userRole);
    this.inputDate();
    console.log(this.year);
    console.log(this.weekNo)
  }
  getTables(date: string) {
    console.log(this.dateReq)
    this.timeTableService.getTables(date).subscribe(data => {
      this.timeTables = data;
      console.log(data);
    })
  }
  inputDate() {
    if (this.init == true) {
      let date = new Date()
      this.dateReq = date.toLocaleDateString();
      this.formatDate(this.dateReq);
      this.init = false;
    } else {
      this.formatDate(this.dateReq);
    }
  }
  formatDate(obj: string) {
    let dateInput = obj.split('/').reverse().join('-');
    console.log(dateInput);
    this.getTables(dateInput);
  }

  getWeek(day: any) {
    const firstDayOfYear: any = new Date(day.getFullYear(), 0, 1);
    const pastDaysOfYear: number = (day - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };
  routeAdd() {
    this.router.navigate([`dashboard/${this.userRole}/timetable/add`])
  }
}
