import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth.service';
import { Router } from '@angular/router';
import { User } from '../../../../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {

  username: string = '';
  password: string = '';
  role: string = ''; 
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    const user = new User(this.username, this.password, this.role);
    const success = this.authService.register(user);
    if (success) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Registration failed';
    }
  }


}
