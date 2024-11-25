import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrl: './loginregister.component.css'
})
export class LoginregisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        utNumber: [''],
        role: ['', Validators.required],
        subscribeNewsletter: [false],
      },
    //  { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;
      // Handle form submission (send data to the server)
      console.log('Form Submitted:', formValues);
    }
  }
}




