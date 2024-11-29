import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamService } from '../../../Services/exam.service';

@Component({
  selector: 'app-admin-exams',
  templateUrl: './admin-exams.component.html',
  styleUrl: './admin-exams.component.css'
})
export class AdminExamsComponent implements OnInit {
  examForm: FormGroup;
  exams: any[] = [];

  constructor(private fb: FormBuilder, private examService: ExamService) {
    this.examForm = this.fb.group({
      name: [''],
      date: [''],
    });
  }

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams(): void {
    this.examService.getExams().subscribe((data) => (this.exams = data));
  }

  onSubmit(): void {
    const exam = this.examForm.value;
    this.examService.addExam(exam).subscribe(() => {
      this.examForm.reset();
      this.loadExams();
    });
  }

  approveMarks(examId: string): void {
    this.examService.approveMarks(examId).subscribe(() => {
      this.loadExams();
    });
  }

  deleteExam(examId: string): void {
    this.examService.deleteExam(examId).subscribe(() => {
      this.loadExams();
    });
  }
}