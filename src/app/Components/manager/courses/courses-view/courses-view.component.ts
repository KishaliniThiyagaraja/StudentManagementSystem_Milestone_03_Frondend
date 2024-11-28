import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../Services/course.service';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrl: './courses-view.component.css'
})
export class CoursesViewComponent implements OnInit {
  courses: any[] = [];
  newCourse: any = {};

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  addCourse() {
    this.courseService.addCourse(this.newCourse).subscribe(() => {
      this.loadCourses();
      this.newCourse = {};
    });
  }

  updateCourse(courseId: string) {
    this.courseService.updateCourse(courseId, this.newCourse).subscribe(() => {
      this.loadCourses();
      this.newCourse = {};
    });
  }

  deleteCourse(courseId: string) {
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.loadCourses();
    });
  }
}