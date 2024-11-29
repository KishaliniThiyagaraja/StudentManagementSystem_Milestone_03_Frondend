import { Component } from '@angular/core';

interface Timetable {
  course: string;
  startTime: string;
  endTime: string;
  lecture: string;
  group: 'A' | 'B';
  sessionType: 'Session' | 'Lab';
}

interface Student {
  utNumber: string;
  name: string;
  present: boolean;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {

  date: Date = new Date();
  timetable: Timetable[] = [
    {
      course: 'Math',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      lecture: 'Mr. Smith',
      group: 'A',
      sessionType: 'Lab',
    },
  ];
  
  students: Student[] = [
    { utNumber: '001', name: 'Alice', present: false },
    { utNumber: '002', name: 'Bob', present: false },
  ];
}
