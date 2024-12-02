import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamService } from '../../../Services/exam.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-exams',
  templateUrl: './admin-exams.component.html',
  styleUrl: './admin-exams.component.css'
})
export class AdminExamsComponent implements OnInit {
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

  // Add a new exam (calls backend API)
  addExam() {
    const newExam = {
      utNumber: `UT00${this.exams.length + 1}`,
      studentName: 'New Student',
      examType: 'Quiz',
      status: 'Not Approved',
    };

    this.http.post<any>(this.apiUrl, newExam).subscribe(
      (response) => {
        this.exams.push(response);
        alert('Exam added successfully.');
      },
      (error) => {
        console.error('Error adding exam:', error);
        alert('Failed to add exam.');
      }
    );
  }

  // Edit an existing exam (calls backend API)
  editExam(exam: any) {
    const updatedExam = {
      ...exam,
      examType: 'Updated Exam Type', // Example update
    };

    this.http.put<any>(`${this.apiUrl}/${exam.id}`, updatedExam).subscribe(
      (response) => {
        const index = this.exams.findIndex((e) => e.id === exam.id);
        if (index !== -1) {
          this.exams[index] = response;
        }
        alert(`Exam for ${exam.studentName} has been updated.`);
      },
      (error) => {
        console.error('Error updating exam:', error);
        alert('Failed to update exam.');
      }
    );
  }

  // Delete an exam by ID (calls backend API)
  deleteExam(id: number) {
    const confirmed = confirm('Are you sure you want to delete this exam?');
    if (confirmed) {
      this.http.delete<any>(`${this.apiUrl}/${id}`).subscribe(
        () => {
          this.exams = this.exams.filter((exam) => exam.id !== id);
          alert('Exam deleted successfully.');
        },
        (error) => {
          console.error('Error deleting exam:', error);
          alert('Failed to delete exam.');
        }
      );
    }
  }
}