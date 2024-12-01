import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../Services/course.service';
import { Router } from '@angular/router';
import { Course } from '../../../../model';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent implements OnInit {
  courses:Course[] = []

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourse();
  }



  loadCourse(){
    this.courseService.getCourse().subscribe(c=>
      this.courses=c)
  }

  deleteCourse(id:string){
    if(confirm("If You Want Delete The Course...")){
      this.courseService.deleteCourse(id).subscribe(d=>{
        alert("Course Deleted Successfully...")
        this.loadCourse();
      })
    }
  }
}