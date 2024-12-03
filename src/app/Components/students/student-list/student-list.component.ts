import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  ngOnInit(): void {
    // Retrieve student data (role `4`) from localStorage
    const storedData = localStorage.getItem('4');
    this.students = storedData ? JSON.parse(storedData) : [];
  }
}