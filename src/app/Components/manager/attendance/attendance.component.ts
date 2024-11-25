import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgModelGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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

export class AttendanceComponent implements OnInit {
  attendanceRecords: Attendance[] = [];
  newAttendance: Attendance = { timetableId: '', utNumber: '', date: new Date(), isPresent: false };

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendanceRecords();
  }

  // Get attendance records (Admin)
  loadAttendanceRecords(): void {
    this.attendanceService.getAttendanceRecords().subscribe({
      next: (data) => (this.attendanceRecords = data),
      error: (err) => console.error('Error fetching attendance records', err)
    });
  }

  // Mark attendance (Staff)
  markAttendance(): void {
    this.attendanceService.markAttendance(this.newAttendance).subscribe({
      next: () => {
        alert('Attendance marked successfully!');
        this.loadAttendanceRecords();
        this.newAttendance = { timetableId: '', utNumber: '', date: new Date(), isPresent: false };
      },
      error: (err) => console.error('Error marking attendance', err)
    });
  }
}