import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';

@Component({
  selector: 'app-manager-attendance',
  templateUrl: './manager-attendance.component.html',
  styleUrl: './manager-attendance.component.css'
})
export class ManagerAttendanceComponent implements OnInit {
  role = 'Admin';  // This would be dynamic based on login role
  attendances = [];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance() {
    this.attendanceService.getAllAttendances().subscribe(data => {
      this.attendances = data;
    });
  }
}