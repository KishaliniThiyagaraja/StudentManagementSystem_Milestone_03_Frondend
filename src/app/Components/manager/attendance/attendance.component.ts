import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgModelGroup } from '@angular/forms';

// interface Student { 
//   id: number; 
//   name: string; 
//   utnumber: string; 
//   course: string; 
//   present: boolean; }

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})

export class AttendanceComponent implements OnInit{
  students: { id: number; name: string; regNo: string; roll: number; attendance: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  // Fetch students from API
  fetchStudents(): void {
    const apiUrl = 'https://your-api-endpoint.com/students'; //  API URL
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.students = data.map((student) => ({
          ...student,
          attendance: 'Absent' // Default attendance
        }));
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  // Update attendance status in backend
  updateAttendance(studentId: number, attendanceStatus: string): void {
    const apiUrl = `https://your-api-endpoint.com/students/${studentId}/attendance`; //  API URL
    const payload = { attendance: attendanceStatus };

    this.http.put(apiUrl, payload).subscribe(
      (response) => {
        console.log(`Attendance updated for student ${studentId}:`, response);
      },
      (error) => {
        console.error('Error updating attendance:', error);
      }
    );
  }
}