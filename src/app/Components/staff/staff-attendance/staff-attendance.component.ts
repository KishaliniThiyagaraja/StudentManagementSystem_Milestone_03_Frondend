import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html',
  styleUrl: './staff-attendance.component.css'
})
export class StaffAttendanceComponent implements OnInit {
  role = 'Staff';  // This would be dynamic based on login role
  attendance = { studentUTNumber: '', isPresent: false, date: '' };
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

  markAttendance() {
    this.attendanceService.addAttendance(this.attendance).subscribe(response => {
      this.loadAttendance();  // Refresh the attendance records
    });
  }

  editAttendance(attendance: any) {
    // Function to edit attendance record (update functionality)
  }
}