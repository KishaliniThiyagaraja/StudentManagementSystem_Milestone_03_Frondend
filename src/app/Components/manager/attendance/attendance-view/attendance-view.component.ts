import { Component, OnInit } from '@angular/core';

import { AttendanceService } from '../../../../Services/attendance.service';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrl: './attendance-view.component.css'
})
export class AttendanceViewComponent implements OnInit {
  courseId: number = 0;  // Default value
  timetableId: number = 0;  // Default value
  attendanceRecords: any[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance() {
    this.attendanceService.getAttendance(this.courseId, this.timetableId).subscribe(records => {
      this.attendanceRecords = records;
    });
  }
}