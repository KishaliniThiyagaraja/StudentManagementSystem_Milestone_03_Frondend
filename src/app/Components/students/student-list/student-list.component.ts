import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  constructor(private studentService : StudentService, private router : Router){

  }
  ngOnInit(): void {
   this.studentService.getAllStudents().subscribe(data => {
    console.log(data);
    this.students = data;
   }) 
  }
  routeStudentView(utNum : string){
    this.router.navigate([`dashboard/Staff/students` , utNum])
  }
}