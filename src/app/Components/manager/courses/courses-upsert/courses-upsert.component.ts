import { Component } from '@angular/core';
import { CourseService } from '../../../../Services/course.service';

@Component({
  selector: 'app-courses-upsert',
  templateUrl: './courses-upsert.component.html',
  styleUrl: './courses-upsert.component.css'
})
export class CoursesUpsertComponent {
  courses: any[] = [];
  studentId: string = '';
  selectedCourseId: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  enroll() {
    if (this.selectedCourseId && this.studentId) {
      this.courseService.enrollStudent(this.selectedCourseId, this.studentId).subscribe(() => {
        alert('Student enrolled successfully');
      });
    }
  }
}