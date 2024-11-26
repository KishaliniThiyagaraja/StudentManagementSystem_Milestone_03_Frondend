import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../../../../Services/attendance.service';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrl: './attendance-form.component.css'
})
export class AttendanceFormComponent implements OnInit {
  courseId: number = 0;  // Default value to avoid uninitialized property error
  timetableId: number = 0;  // Default value
  attendanceStatus: string = '';  // Default value to avoid uninitialized property error
  students: any[] = [];  // Initializing as an empty array
  loggedInStaffId: number = 1;  // Sample logged-in staff ID

  constructor(private attendanceService: AttendanceService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    // Assuming courseId is already set by some other process or selection
    this.attendanceService.getStudentsForCourse(this.courseId).subscribe(students => {
      this.students = students;
    });
  }

  markAttendance(studentId: number, status: string) {
    const attendanceData = {
      courseId: this.courseId,
      timetableId: this.timetableId,
      studentId: studentId,
      status: status,
      markedBy: this.loggedInStaffId
    };

    this.attendanceService.markAttendance(attendanceData).subscribe(response => {
      console.log('Attendance marked', response);
    });
  }

  submitAttendance() {
    alert('Attendance submitted successfully!');
    this.router.navigate(['/attendance-view']);
  }
}