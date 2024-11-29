import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  studentData: any;

  ngOnInit(): void {
    // Retrieve data from state
    this.studentData = history.state.data;
    console.log('Student Data:', this.studentData);
  }
}