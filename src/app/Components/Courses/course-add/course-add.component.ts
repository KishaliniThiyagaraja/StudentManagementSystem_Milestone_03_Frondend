import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../Services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent {
  courseForm:FormGroup;

  constructor(private fb: FormBuilder , private courseService:CourseService,private router:Router) {

    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required]],
      description: [''],
      startDate:['',[Validators.required]],
      endDate:[''],
      isDeleted:['']
    });
  }

  createCourse(){
    const course = this.courseForm.value;
    return this.courseService.addCourse(course).subscribe(data=>{
      alert("Course Create Successfully.....")
      this.router.navigate(['/Staff/Course'])
    })
  }
}

