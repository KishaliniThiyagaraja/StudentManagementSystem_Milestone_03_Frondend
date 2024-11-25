import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {
  registrationData = {
    utNumber: '',
    password: '',
  };

  constructor(private apiService: ApiService) {}

  register() {
    this.apiService.register(this.registrationData).subscribe(
      (response) => {
        alert('Registration successful');
      },
      (error) => {
        console.error(error);
        alert('Failed to register');
      }
    );
  }
}

