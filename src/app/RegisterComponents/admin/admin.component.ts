import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  userData = {
    userName: '',
    userID: '',
    email: '',
    phoneNumber: '',
    role: '',
  };

  constructor(private apiService: ApiService) {}

  addUser() {
    this.apiService.addUser(this.userData).subscribe(
      (response) => {
        alert('User added successfully');
      },
      (error) => {
        console.error(error);
        alert('Failed to add user');
      }
    );
  }
}

