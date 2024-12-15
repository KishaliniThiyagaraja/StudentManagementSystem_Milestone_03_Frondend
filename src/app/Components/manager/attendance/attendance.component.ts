import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../Services/attendance.service';
import { Router } from '@angular/router';
import { TimeTableService } from '../../../Services/time-table.service';
import { StudentService } from '../../../Services/student.service';
import { AttendanceRequest } from '../../../../model';

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
  timeSlots: any;
  timeTables: any;
  isLoading = false;
  currentDate!: string;
  currentBatch!: string;
  attendanceData: any[] = [];
  attendedStudents!: any[];
  currentSlot: string = '';
  now: any;

  constructor(private attendanceService: AttendanceService, private router: Router,
    private timeTableService: TimeTableService, private studentService: StudentService) {
    var now = new Date();
    this.now = `${now.getHours()}: ${now.getMinutes()}`
    this.currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.attendanceService.getAttendances().subscribe(data => {
      this.attendances = data;
      this.isLoading = false;
    });
    this.fetchCourses();
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
  markAttendance(utNum: string, index: number) {
    let obj: AttendanceRequest = {
      timeSlotId: this.currentSlot,
      studentUtNumber: utNum
    }
    this.attendanceService.addAttendance(obj).subscribe(data => {
      if (data) {
        // this.attendanceData.splice(index, 1);
        let record = this.attendanceData[index];
        this.attendedStudents.push(record);
        this.filterBoth();
      }
    }
    )
  }
  fetchCourses() {
    this.timeTableService.getTables(this.currentDate).subscribe(data => {
      this.timeTables = data;
      console.log(data);
    })
  }
  fetchSlots(batch: string) {
    this.currentBatch = batch;
    let slots = this.timeTables.filter((c: any) => c.batch == batch);
    console.log(slots[0].timeSlots)
    this.timeSlots = slots[0].timeSlots;
    console.log(this.timeSlots);
  }
  getStudents(courseId: string, slotId: string) {
    this.currentSlot = slotId;
    this.attendanceService.getAttendancebyCourseAndBatch(courseId, this.currentBatch).subscribe(data => {
      this.attendanceData = data;
      console.log(data);
      this.attendanceService.getAttendedStudents(this.currentSlot).subscribe(data => {
        this.attendedStudents = data;
        console.log(data);
        this.filterBoth();
      })
    });
  }
  filterBoth() {
    // Map attended student UT numbers for comparison
    let attendedUTNumbers = new Set(this.attendedStudents.map(s => s.studentUTNumber || s.utNumber));
    console.log(attendedUTNumbers)
    // Filter attendanceData to exclude records with UT numbers in attendedUTNumbers
    this.attendanceData = this.attendanceData.filter(a => !attendedUTNumbers.has(a.utNumber || a.studentUTNumber));
    console.log(this.attendanceData);
  }

}