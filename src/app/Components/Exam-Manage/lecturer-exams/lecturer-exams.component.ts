import { Component } from '@angular/core';
import { ExamService } from '../../../Services/exam.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lecturer-exams',
  templateUrl: './lecturer-exams.component.html',
  styleUrl: './lecturer-exams.component.css'
})
export class LecturerExamsComponent {
marksForm: FormGroup;

  constructor(private fb: FormBuilder, private examService: ExamService) {
    this.marksForm = this.fb.group({
      examId: [''],
      studentId: [''],
      marks: [''],
    });
  }

  onSubmit(): void {
    const { examId, ...marks } = this.marksForm.value;
    this.examService.submitMarks(examId, marks).subscribe(() => {
      this.marksForm.reset();
    });
  }
}