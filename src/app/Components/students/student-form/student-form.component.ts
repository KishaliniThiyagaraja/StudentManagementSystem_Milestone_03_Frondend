import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../Services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {

  isEditMode=false;
  studentForm: FormGroup;
  utNumber: string;

  constructor(private fb:FormBuilder,
     private studentService:StudentService,
     private router:Router,
      private route:ActivatedRoute
    ){

    const utNumber = this.route.snapshot.paramMap.get("utNumber");
    this.utNumber=String(utNumber);


    this.studentForm=this.fb.group({
      utNumber:['',[Validators.required]],
      firstName:['',[Validators.required]],
      lastName:[''],
      nicNumber:[''],
      email:[''],
      batch:['']
    })

    if(utNumber){
      this.isEditMode=true;

    }else{
      this.isEditMode=false;
    }
  }

  ngOnInit(): void {
    if(this.isEditMode==true){
      this.studentService.getStudentById(this.utNumber).subscribe(data=>
      {
        this.studentForm.patchValue({
          //////
        })
      }
      )
    }
  }

  onSubmit() {
    let user = this.studentForm.value;
  
    if (this.isEditMode == true) {
      user.id = this.utNumber;
      this.studentService.updateStudent(user).subscribe(data => {
        alert("Student is updated successfully");
        this.router.navigate(["/user-list"]);
      });
    } else {
      this.studentService.addStudent(user).subscribe(data => {
        alert("Student is created successfully");
        this.router.navigate(["/student-list"]);
      });
    }
  
}
}

