import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.css'
})
export class CourseEditComponent implements OnInit {

  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Description: ['', [Validators.required]],
      StartDate: ['', [Validators.required]],
      EndDate: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
   
    const courseId = this.route.snapshot.paramMap.get('id');

    
    if (courseId) {
      
      const courseData = {
        Name: 'Course 1',
        Description: 'Course 1 Description',
        StartDate: '2024-01-01',
        EndDate: '2024-06-01'
      };

      this.courseForm.patchValue(courseData);
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
     
      console.log('Course data:', this.courseForm.value);

   
      this.router.navigate(['/courses']);
    }
  }
  
  cancle(): void {
 
    this.router.navigate(['/courses']);
  }
}
