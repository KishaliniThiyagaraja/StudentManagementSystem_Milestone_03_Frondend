import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrl: './loginregister.component.css'
})
export class LoginregisterComponent implements OnInit {
  registrationForm!: FormGroup;
  roles: string[] = ['Staff', 'Lecture', 'Student'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      utNumber: [''], // Optional fields
      batch: ['']
    });

    // Handle role changes dynamically
    this.registrationForm.get('role')?.valueChanges.subscribe((selectedRole) => {
      if (selectedRole === 'Student') {
        // Add validators for UTNumber and Batch
        this.registrationForm.get('utNumber')?.setValidators([Validators.required]);
        this.registrationForm.get('batch')?.setValidators([Validators.required]);
      } else {
        // Clear validators for UTNumber and Batch
        this.registrationForm.get('utNumber')?.clearValidators();
        this.registrationForm.get('batch')?.clearValidators();
      }
      this.registrationForm.get('utNumber')?.updateValueAndValidity();
      this.registrationForm.get('batch')?.updateValueAndValidity();
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}



