import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/student.service';
import { Router } from '@angular/router';
import { Student } from '../../../../model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  student:Student[]=[]


  constructor(private studentService:StudentService, private router:Router){}


  ngOnInit(): void {
    this.listStudent();
  }

  listStudent(){
    this.studentService.getStudent().subscribe(s=>
      this.student=s)
  }


  studentDelete(utNumber:string){
    if(confirm("If you want delete a student")){
       this.studentService.deleteStudent(utNumber).subscribe(d=>{
        alert("Student Delete Successfully...")
        this.listStudent(); 
      })
    }
}
}