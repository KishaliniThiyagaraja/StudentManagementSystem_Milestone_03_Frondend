import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../Services/exam.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lecturer-exams',
  templateUrl: './lecturer-exams.component.html',
  styleUrl: './lecturer-exams.component.css'
})
export class LecturerExamsComponent implements OnInit {
  exams: any[] = [];
  apiUrl = 'https://your-backend-api.com/api/exams'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getExams();
  }

  // Fetch all exams from the backend
  getExams() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.exams = data;
      },
      (error) => {
        console.error('Error fetching exams:', error);
        alert('Failed to load exams.');
      }
    );
  }

  // Submit marks for an exam
  submitMarks(exam: any) {
    if (exam.marks === undefined || exam.marks === null) {
      alert('Please enter marks before submitting.');
      return;
    }

    const updatedExam = {
      ...exam,
      marks: exam.marks, // Set the marks to the entered value
    };

    this.http.put<any>(`${this.apiUrl}/${exam.id}`, updatedExam).subscribe(
      (response) => {
        alert(`Marks for ${exam.studentName} have been submitted.`);
      },
      (error) => {
        console.error('Error submitting marks:', error);
        alert('Failed to submit marks.');
      }
    );
  }
}