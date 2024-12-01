import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../Services/exam.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrl: './student-exams.component.css'
})
export class StudentExamsComponent implements OnInit {
  marks: any[] = [];
  apiUrl = 'https://your-backend-api.com/api/marks'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMarks();
  }

  // Fetch marks from the backend
  getMarks() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.marks = data;
      },
      (error) => {
        console.error('Error fetching marks:', error);
        alert('Failed to load marks.');
      }
    );
  }
}