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
  timeSlots : any;
  timeTables : any;
  isLoading = false;
  currentDate! : string;
  currentBatch! : string;
  attendanceData : any[] = [];
  currentSlot : string = ''
  
  constructor(private attendanceService: AttendanceService, private router: Router,
     private timeTableService : TimeTableService, private studentService : StudentService) {
      var now = new Date();
      this.currentDate = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
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
  markAttendance(utNum : string){
    let obj : AttendanceRequest = {
      timeSlotId : this.currentSlot,
      studentUtNumber : utNum
    }
    this.attendanceService.addAttendance(obj).subscribe(data => console.log(data))
  }
  fetchCourses(){
    this.timeTableService.getTables(this.currentDate).subscribe(data => {
      this.timeTables = data;
    })
  }
  fetchSlots(batch : string){
    this.currentBatch = batch;
   let slots = this.timeTables.filter((c :any) => c.batch == batch);
   console.log(slots[0].timeSlots)
    this.timeSlots = slots[0].timeSlots;
    console.log(this.timeSlots);
  }
  getStudents(courseId : string){
    this.attendanceService.getAttendancebyCourseAndBatch(courseId ,this.currentBatch).subscribe(data => {
      this.attendanceData = data;
      console.log(data);
    })
  }
}