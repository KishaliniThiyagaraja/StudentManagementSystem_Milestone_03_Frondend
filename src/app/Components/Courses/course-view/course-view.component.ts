import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../Services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(
      (data: any[]) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(
        () => {
          this.courses = this.courses.filter((course) => course.Id !== id);
        },
        (error) => {
          console.error('Error deleting course', error);
        }
      );
    }
  }
  

  onEdit(id: number): void {
    this.router.navigate(['/courses/edit', id]);
  }
}