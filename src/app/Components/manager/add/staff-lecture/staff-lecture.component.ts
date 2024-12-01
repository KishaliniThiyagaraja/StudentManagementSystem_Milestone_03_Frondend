import { Component } from '@angular/core';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-staff-lecture',
  templateUrl:'staff-lecture.component.html',
  styleUrl: './staff-lecture.component.css'
})
export class StaffLectureComponent {
  name = '';
  userId = '';
  nic = '';
  email = '';
  phone = '';
  role = '';

  constructor(private apiService: ApiService) {}

  submitForm() {
    const data = { name: this.name, userId: this.userId, nic:this.nic, email: this.email, phone: this.phone, role: this.role };
    if (this.role === 'Staff') {
      this.apiService.addStaff(data).subscribe((res) => {
        alert('Staff added successfully');
      });
    } else {
      this.apiService.addLecturer(data).subscribe((res) => {
        alert('Lecturer added successfully');
      });
    }
  }
}