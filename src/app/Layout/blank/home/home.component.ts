import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 userRole: string = '';

  constructor(private authService: AuthService, private router: Router) {
    const user = this.authService.getLoggedInUser();
    if (user) {
      this.userRole = user.role;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
