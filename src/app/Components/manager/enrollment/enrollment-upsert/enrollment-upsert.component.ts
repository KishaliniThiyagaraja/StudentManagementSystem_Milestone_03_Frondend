import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../Services/course.service';

@Component({
  selector: 'app-enrollment-upsert',
  templateUrl: './enrollment-upsert.component.html',
  styleUrl: './enrollment-upsert.component.css'
})
// export class EnrollmentUpsertComponent {

//   newEntry = {
//   name: '',
//   date: '',
//   course: '',
// };

// courses = ['UT0001', 'UT0002', 'UT0003'];

// rows: { name: string; date: string; course: string }[] = [];

// addRow() {
//   const { name, date, course } = this.newEntry;

//   if (name && date && course) {
//     this.rows.push({ name, date, course });

//     this.newEntry = { name: '', date: '', course: '' };
//   } else {
//     alert('Please fill in all fields!');
//   }
// }

// deleteRow(index: number) {
//   this.rows.splice(index, 1);
// }
// }
export class EnrollmentUpsertComponent implements OnInit {
deleteRow(_t37: number) {
throw new Error('Method not implemented.');
}

  newEntry = {
    name: '',
    date: '',
    course: ''
  };

  courses: { id: string; courseName: string }[] = [];
  rows: { name: string; date: string; course: string }[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourse().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  addRow(): void {
    const { name, date, course } = this.newEntry;

    if (name && date && course) {
      this.rows.push({ name, date, course });
      this.newEntry = { name: '', date: '', course: '' };
    } else {
      alert('Please fill in all fields!');
    }
  }
}
