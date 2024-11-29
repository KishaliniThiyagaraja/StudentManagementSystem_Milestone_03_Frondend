import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courseadd',
  templateUrl: './courseadd.component.html',
  styleUrl: './courseadd.component.css'
})
export class CourseaddComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

   ngOnInit(): void {
    
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseDescription: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log('Form Submitted', this.courseForm.value);
    }
  }


  cancle(): void {
    console.log('Form Canceled');
    this.courseForm.reset(); 
  }
}
