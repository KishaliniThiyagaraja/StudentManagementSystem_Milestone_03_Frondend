import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { jwtDecode } from "jwt-decode";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router : Router) {
    // Initialize the form
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Submit form
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((data: any) => {
        console.log(data);
        if (data) {
          localStorage.setItem("token", data.token)

          const decoded = jwtDecode(data.token);
          console.log(decoded)
          let user : any = JSON.parse(JSON.stringify(decoded))
          localStorage.setItem('userId' , user.UserId);
          localStorage.setItem('role', user.UserRole);
          if(user.UserRole == "Student"){
            this.router.navigate(['/dashboard/Student'])
          }
          else if(user.UserRole == "Lecturer"){
            this.router.navigate(['/dashboard/lecturer'])
          }else if(user.UserRole == "Staff"){
            this.router.navigate(['/dashboard/Staff'])
          }
          else if(user.UserRole == "Manager"){
            this.router.navigate(['/dashboard/manager'])
          }
        }
      })
    } else {

    }
  }
}