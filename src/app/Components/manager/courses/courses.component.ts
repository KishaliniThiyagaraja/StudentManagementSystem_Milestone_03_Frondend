import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../Services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  enrolledCourses: any[] = [];
  userId: string = 'lecturer_or_student_id'; // Replace with dynamic user ID

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadEnrolledCourses();
  }

  loadEnrolledCourses() {
    this.courseService.getEnrolledCourses(this.userId).subscribe(data => {
      this.enrolledCourses = data;
    });
  }
}