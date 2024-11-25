import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';

@Component({
  selector: 'app-lecturer-attendance',
  templateUrl: './lecturer-attendance.component.html',
  styleUrl: './lecturer-attendance.component.css'
})
export class LecturerAttendanceComponent implements OnInit {
  role = 'Lecturer';  // This would be dynamic based on login role
  attendances = [];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance() {
    this.attendanceService.getAttendances().subscribe(data => {
      this.attendances = data;
    });
  }
}