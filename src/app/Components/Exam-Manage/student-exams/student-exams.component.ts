import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../Services/exam.service';

@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrl: './student-exams.component.css'
})
export class StudentExamsComponent implements OnInit {
  marks: any[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    const studentId = 'student123'; // Replace with dynamic ID
    this.examService.getMarks(studentId).subscribe((data) => (this.marks = data));
  }
}