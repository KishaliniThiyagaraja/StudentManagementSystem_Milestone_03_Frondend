import { Component } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrl: './view-attendance.component.css'
})

  export class ViewAttendanceComponent {
    attendanceRecords : any[] = [];
  
    constructor(private attendanceService: AttendanceService) {
      this.getAttendanceRecords();
    }
  
    getAttendanceRecords() {
      this.attendanceRecords = this.attendanceService.getAttendanceRecords();
    }
  }
