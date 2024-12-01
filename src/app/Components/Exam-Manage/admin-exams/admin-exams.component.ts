import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamService } from '../../../Services/exam.service';

@Component({
  selector: 'app-admin-exams',
  templateUrl: './admin-exams.component.html',
  styleUrl: './admin-exams.component.css'
})
export class AdminExamsComponent  {
  exams = [
    { id: 1, utNumber: 'UT001', studentName: 'John Doe', examType: 'Midterm' },
    { id: 2, utNumber: 'UT002', studentName: 'Jane Smith', examType: 'Final' }
  ];

  addExam() {
    console.log('Add Exam');
  }

  editExam(exam: any) {
    console.log('Edit Exam:', exam);
  }

  deleteExam(id: number) {
    console.log('Delete Exam ID:', id);
    this.exams = this.exams.filter(e => e.id !== id);
  }
}