import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamService } from '../../../Services/exam.service';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../../../Services/course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-exams',
  templateUrl: './admin-exams.component.html',
  styleUrl: './admin-exams.component.css'
})
export class AdminExamsComponent implements OnInit {
  exams: any[] = [];
  courses: any[] = []
  addExamForm: any;

  constructor(private examService: ExamService, private courseService: CourseService,
     private fb: FormBuilder, private toastr : ToastrService) {
    this.addExamForm = this.fb.group({
      examDate: [''],
      group: [''],
      batch: [''],
      courseId: ['']
    })
  }

  ngOnInit(): void {
    this.getExams();
    this.getCourses();
  }

  // Fetch all exams from the backend
  getExams() {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
      console.log(data)
    })
  }

  getCourses() {
    this.courseService.getCourse().subscribe(data => {
      this.courses = data;
      console.log(data);
    })
  }

  // Add a new exam (calls backend API)
  addExam() {
    this.addExamForm.value.group = parseInt( this.addExamForm.value.group);
    this.examService.addExam(this.addExamForm.value).subscribe(data => {
      console.log(data);
      if(data){
        this.exams.push(this.addExamForm.value)
        this.toastr.success('Exam added Successfully');
      }else{
        this.toastr.warning('Exam adding Failed')
      }
    })
  }

  // Edit an existing exam (calls backend API)
  editExam(exam: any) {
    const updatedExam = {
      ...exam,
      examType: 'Updated Exam Type', // Example update
    };
  }

  // Delete an exam by ID (calls backend API)
  deleteExam(id: string) {
    const confirmed = confirm('Are you sure you want to delete this exam?');
    if (confirmed) {
      this.examService.deleteExam(id).subscribe(data => {
        console.log(data);
      })
    }
  }
}