import { Component } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrl: './mark-attendance.component.css'
})
export class MarkAttendanceComponent {


  studentId: number = 0;
  courseId: number = 0;
  status: boolean = true; // true for present

  constructor(private attendanceService: AttendanceService) { }

  markAttendance() {
    const record = {
      studentId: this.studentId,
      courseId: this.courseId,
      date: new Date().toISOString().split('T')[0],
      status: this.status
    };
    this.attendanceService.markAttendance(record);
    alert('Attendance marked successfully!');
    this.clearForm();
  }

  clearForm() {
    this.studentId = 0;
    this.courseId = 0;
    this.status = true;
  }
}