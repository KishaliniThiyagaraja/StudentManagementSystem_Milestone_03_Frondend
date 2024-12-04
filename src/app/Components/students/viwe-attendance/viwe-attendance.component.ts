import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';

@Component({
  selector: 'app-viwe-attendance',
  templateUrl: './viwe-attendance.component.html',
  styleUrl: './viwe-attendance.component.css'
})
export class ViweAttendanceComponent implements OnInit {
  attendanceRecords: any[] = [];
  totalPresent = 0;
  totalAbsent = 0;
  utnumber = ''; // Example student ID, replace as needed

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.fetchAttendance();
  }

  // Fetch attendance from backend
  fetchAttendance() {
    this.attendanceService.getAttendances().subscribe(
      (response) => {
        // handle the response
      },
      (error) => {
        // handle the error
      }
    );
    
  }

  // Calculate attendance summary
  calculateSummary() {
    this.totalPresent = this.attendanceRecords.filter(record => record.status === 'Present').length;
    this.totalAbsent = this.attendanceRecords.filter(record => record.status === 'Absent').length;
  }
}