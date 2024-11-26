import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required], // Conditional validation will apply later
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      subscribeNewsletter: [false],
    });

    // React dynamically to role selection
    this.loginForm.get('role')?.valueChanges.subscribe((role) => {
      this.applyIdentifierValidation(role);
    });
  }

  applyIdentifierValidation(role: string) {
    const identifierControl = this.loginForm.get('identifier');

    if (role === 'Student') {
      identifierControl?.setValidators([Validators.required, Validators.pattern(/^\d{8}$/)]); // UT number: 8 digits
    } else {
      identifierControl?.setValidators([Validators.required, Validators.email]); // Email validation
    }

    identifierControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      // Add logic to handle login (e.g., API call)
    }
  }
}



  // email : string = '';
  // password : string = '';

  // constructor(private auth : AuthService) { }

  // ngOnInit(): void {
  // }
  // OnUserLogin(){
  //   if (this.email == ''){
  //     alert('please enter your email');
  //     return;
  //   }

  //   if (this.password == ''){
  //     alert('please enter your password');
  //     return;
  //   }

  // this.auth.login(this.email, this.password);

  // this.email = '';
  // this.password = '';
  // }
  // OnSignInWithGoogle(){
  //   this.auth.googleSignIn();
  // }

