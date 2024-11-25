import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-staff-registration',
  templateUrl: './staff-registration.component.html',
  styleUrl: './staff-registration.component.css'
})
export class StaffRegistrationComponent {
  registrationData = {
    userID: '',
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