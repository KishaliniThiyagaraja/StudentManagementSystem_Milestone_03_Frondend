import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/student.service';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../Services/course.service';
import { FormBuilder } from '@angular/forms';
import { EnrollmentService } from '../../../Services/enrollment.service';
import { ExamService } from '../../../Services/exam.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrl: './students-view.component.css'
})
export class StudentsViewComponent implements OnInit {
  currentId: string = '';
  currentStudent: any;
  enrollForm: any
  courses: any[] = [];
  marks : any[] = []
  alreadyEnrolled: any[] = []
  constructor(private userService: StudentService, private route: ActivatedRoute,private examService : ExamService, private courseService: CourseService, private enrollService : EnrollmentService) {
    this.currentId = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.currentId)
  }
  ngOnInit(): void {
    this.userService.getStudentById(this.currentId).subscribe(data => {
      this.currentStudent = data;
      console.log(data);
    })
    this.courseService.getCourse().subscribe(data => {
      this.courses = data;
      console.log(data);
    })
    this.examService.getExams().subscribe(data => {
      console.log(data);
    })
  }
  onSubmit() {
    let checkboxes = document.querySelectorAll('input[name=myCourses]:checked');
    console.log(checkboxes);
    let values: any[] = [];
    checkboxes.forEach(function (checkbox: any) {
      values.push(checkbox.value);
    });
    console.log(values);
    let req = {
      studentId : this.currentId,
      courseIds : values
    }
    this.enrollService.addEnrollments(req).subscribe(data => {
      console.log(data);
    })
  }
}
