import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';
import { Router } from '@angular/router';

export interface Attendance {
  id: string; // Unique identifier for the attendance record
  studentId: string; // ID of the student
  courseId: string; // ID of the course the student is enrolled in
  date: Date; // Date of the attendance record
  isPresent: boolean; // Whether the student was present or absent
  student?: Student; // Optional: Include student data for convenience
  course?: Course; // Optional: Include course data for convenience
}

export interface Student {
  id: string;
  utnumber: string;
  email: string;
  // other properties as needed
}

export interface Course {
  id: string;
  name: string;
  description: string;
  // other properties as needed
}



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {
  attendances: Attendance[] = [];

  isLoading = false;

  constructor(private attendanceService: AttendanceService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.attendanceService.getAttendances().subscribe(data => {
      this.attendances = data;
      this.isLoading = false;
    });
  }
  fetchAttendances() {
    this.isLoading = true;
    this.attendanceService.getAttendances().subscribe(
      (data) => {
        this.attendances = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching attendances', error);
        this.isLoading = false;
      }
    );
  }

  addAttendance() {
    // Logic to navigate to the add attendance form or show modal
    console.log('Navigate to add attendance form');
  }
}