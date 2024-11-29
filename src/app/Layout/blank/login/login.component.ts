import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
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
      console.log('Login Successful:', this.loginForm.value);
    } else {
      console.error('Invalid Form');
    }
  }
}