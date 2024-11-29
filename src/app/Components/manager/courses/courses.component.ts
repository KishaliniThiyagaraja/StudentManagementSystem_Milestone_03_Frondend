import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit  {

  courses: { Id: number; Name: string; Description: string, StartDate: string, EndDate: string, IsDeleted: boolean }[] = [];

  constructor() {}
  ngOnInit(): void {
    
    this.courses = [
      {
        Id: 1,
        Name: 'Course 1',
        Description: 'Description for Course 1',
        StartDate: '2024-01-01',
        EndDate: '2024-02-01',
        IsDeleted: false,
      },
      {
        Id: 2,
        Name: 'Course 2',
        Description: 'Description for Course 2',
        StartDate: '2024-03-01',
        EndDate: '2024-04-01',
        IsDeleted: true,
      },
      {
        Id: 3,
        Name: 'Course 3',
        Description: 'Description for Course 3',
        StartDate: '2024-05-01',
        EndDate: '2024-06-01',
        IsDeleted: false,
      },
    ];
  }
 

  OnDelete(courseId: number): void {
    console.log(`Delete course with ID: ${courseId}`);
    this.courses = this.courses.filter(course => course.Id !== courseId);
  }

  onEdit(courseId: number): void {
    console.log(`Edit course with ID: ${courseId}`);
    
  }
}


