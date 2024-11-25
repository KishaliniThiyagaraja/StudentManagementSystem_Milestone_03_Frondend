import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrl: './logins.component.css'
})
export class LoginsComponent {
  loginData = {
    userID: '',
    password: '',
  };

  constructor(private apiService: ApiService) {}

  login() {
    this.apiService.login(this.loginData).subscribe(
      (response) => {
        alert('Login successful');
        // Redirect to dashboard based on role
      },
      (error) => {
        console.error(error);
        alert('Login failed');
      }
    );
  }
}