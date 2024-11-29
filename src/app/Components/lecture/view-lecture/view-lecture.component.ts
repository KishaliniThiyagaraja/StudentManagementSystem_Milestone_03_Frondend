import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-view-lecture',
  templateUrl: './view-lecture.component.html',
  styleUrl: './view-lecture.component.css'
})
export class ViewLectureComponent implements OnInit {
  lecturelist: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getStaff().subscribe((data) => {
      this.lecturelist = data;
    });
  }

  deleteLecture(userId: string) {
    // Add delete functionality here if needed.
    alert('Delete functionality not yet implemented');
  }
}