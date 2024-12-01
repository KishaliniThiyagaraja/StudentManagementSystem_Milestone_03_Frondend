import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../Services/exam.service';

@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrl: './student-exams.component.css'
})
export class StudentExamsComponent {
  marks = [
    { utNumber: 'UT001', studentName: 'John Doe', examType: 'Midterm', marks: 85, status: 'Approved' },
    { utNumber: 'UT002', studentName: 'Jane Smith', examType: 'Final', marks: 90, status: 'Approved' }
  ];
}