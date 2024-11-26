import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment-upsert',
  templateUrl: './enrollment-upsert.component.html',
  styleUrl: './enrollment-upsert.component.css'
})
export class EnrollmentUpsertComponent {

  newEntry = {
  name: '',
  date: '',
  course: '',
};

courses = ['UT0001', 'UT0002', 'UT0003'];

rows: { name: string; date: string; course: string }[] = [];

addRow() {
  const { name, date, course } = this.newEntry;

  if (name && date && course) {
    this.rows.push({ name, date, course });

    this.newEntry = { name: '', date: '', course: '' };
  } else {
    alert('Please fill in all fields!');
  }
}

deleteRow(index: number) {
  this.rows.splice(index, 1);
}
}
