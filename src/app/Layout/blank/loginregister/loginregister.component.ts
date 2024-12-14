import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrl: './loginregister.component.css'
})
export class LoginregisterComponent implements OnInit {
  registrationForm!: FormGroup;
  roles: number[] = [2, 3, 4];
  submittedData: any;


  constructor(private fb: FormBuilder, private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    // Initialize the form
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userId: ['', Validators.required],
      password: ['', Validators.required],
      nicNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required], // Added Date of Birth field
      userRole: ['', Validators.required],
      utNumber: [''], // Optional fields
      batch: [''],
      group : ['']
    });

    // Handle role changes dynamically
    this.registrationForm.get('userRole')?.valueChanges.subscribe((selectedRole) => {
      console.log(selectedRole==4)
      if (selectedRole === 4) {
        // Add validators for UTNumber and Batch
        this.registrationForm.get('utNumber')?.setValidators([Validators.required]);
        this.registrationForm.get('batch')?.setValidators([Validators.required]);
        this.registrationForm.get('group')?.setValidators([Validators.required]);
      } else {
        // Clear validators for UTNumber and Batch
        this.registrationForm.get('utNumber')?.clearValidators();
        this.registrationForm.get('batch')?.clearValidators();
        this.registrationForm.get('group')?.clearValidators();
      }
      this.registrationForm.get('utNumber')?.updateValueAndValidity();
      this.registrationForm.get('batch')?.updateValueAndValidity();
      this.registrationForm.get('group')?.updateValueAndValidity();
    });
  }

  // Handle form submission

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log(formData);
      formData.userRole = parseInt(formData.userRole);
      formData.group = parseInt(formData.group);
      console.log(formData);
      this.authService.register(formData).subscribe((data: any) => {
        console.log(data);
        if(data){
          this.router.navigate(['/dashboard'])
        }
      })
      // Navigate to respective component based on role
      // if (role === 'Student') {
      //   this.router.navigate(['/app-student-list'], { state: { data: formData } });
      // } else if (role === 'Staff') {
      //   this.router.navigate(['/app-view-staff'], { state: { data: formData } });
      // } else if (role === 'Lecture') {
      //   this.router.navigate(['/app-view-lecture'], { state: { data: formData } });
      // }
    } else {
      console.error('Form is invalid');
    }
  }
}

