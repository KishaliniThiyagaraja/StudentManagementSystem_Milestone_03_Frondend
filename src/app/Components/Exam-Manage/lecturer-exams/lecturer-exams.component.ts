import { Component } from '@angular/core';
import { ExamService } from '../../../Services/exam.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lecturer-exams',
  templateUrl: './lecturer-exams.component.html',
  styleUrl: './lecturer-exams.component.css'
})
export class LecturerExamsComponent {
  exams = [
    { id: 1, utNumber: 'UT001', studentName: 'John Doe', examType: 'Midterm', marks: null },
    { id: 2, utNumber: 'UT002', studentName: 'Jane Smith', examType: 'Final', marks: null }
  ];

  submitMarks(exam: any) {
    if (exam.marks === null || exam.marks < 0 || exam.marks > 100) {
      alert('Please enter valid marks between 0 and 100.');
      return;
    }
    console.log('Submitted Marks:', exam);
    alert(`Marks submitted successfully for ${exam.studentName}: ${exam.marks}`);
    // Additional logic to send marks to backend can be added here
  }
}