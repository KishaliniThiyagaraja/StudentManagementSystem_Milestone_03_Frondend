import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent implements OnInit{
  // courses:Course[] = []

  // constructor(private courseService: CourseService, private router: Router) {}

  // ngOnInit(): void {
  //   this.loadCourse();
  // }



  // loadCourse(){
  //   this.courseService.getCourse().subscribe(c=>
  //     this.courses=c)
  // }

  // deleteCourse(id:string){
  //   if(confirm("If You Want Delete The Course...")){
  //     this.courseService.deleteCourse(id).subscribe(d=>{
  //       alert("Course Deleted Successfully...")
  //       this.loadCourse();
  //     })
  //   }
  // }

  // courses = [
  //   {
  //     id: 1,
  //     courseName: 'Mathematics',
  //     description: 'Basic Algebra and Geometry',
  //     startDate: '2024-01-01',
  //     endDate: '2024-06-30',
  //     isDeleted: false,
  //     isEditing: false
  //   },
  //   {
  //     id: 2,
  //     courseName: 'Science',
  //     description: 'Introduction to Physics',
  //     startDate: '2024-02-01',
  //     endDate: '2024-07-31',
  //     isDeleted: false,
  //     isEditing: false
  //   }
  //   // Add more courses as needed
  // ];



  ////////////////////////////////////////////////////

     courses:Course[] = []
     courseForm:FormGroup;
     isEditMode=false;
     id!:string;

    constructor(private courseService: CourseService, private router: Router,private fb:FormBuilder, private route:ActivatedRoute) {
      const id = this.route.snapshot.paramMap.get("id");
      this.id=String(id);


      this.courseForm= this.fb.group({
        courseName:['',[Validators.required]],
        description:[''],
        startDate:['',[Validators.required]],
        endDate:['']
      })
    }

    


  ngOnInit(): void {
    this.loadCourse();

    if(this.isEditMode==true){
      this.courseService.getCourseById(this.id).subscribe(data=>{
      
        this.courseForm.patchValue({
                  

        })
      })


      if(this.id){
        this.isEditMode=true;
      }else{
        this.isEditMode=false;
      }
    }

  }

  loadCourse(){
    this.courseService.getCourse().subscribe(c=>
      this.courses=c)
  }

  editCourse(course: Course): void {
    course.isEditing = true;
  }

  // saveCourse(course: Course): void {
    
  //   course.isEditing = true;
  //   this.onSubmit();
  //   console.log('Course saved:', course);
  //   this.loadCourse();

  // }

  closeEdit(course: Course): void {
    course.isEditing = true;
    console.log('Edit closed for:', course);
    this.loadCourse();

  }

  // deleteCourse(id: string): void {
  //   // Perform API call to delete course
  //   console.log('Deleting course with ID:', id);
  //    this.courses = this.courses.filter(course => this.courses.id !== id);


  onSubmit(id:string){
    let course = this.courseForm.value;


    if(this.isEditMode==true){
      course.id=this.id;
      this.courseService.updateCourse(course).subscribe(data=>{
        alert("course update successfully...")
        this.loadCourse();

      })
    }else{
      this.loadCourse();
    }
  }

    deleteCourse(id:string){
    if(confirm("If You Want Delete The Course...")){
      this.courseService.deleteCourse(id).subscribe(d=>{
        alert("Course Deleted Successfully...")
        this.loadCourse();
      })
    }
  }

//   courses: Course[] = []; // List of courses
//   isLoading: boolean = true; // Loader state

//   constructor(private courseService: CourseService) {}

//   ngOnInit(): void {
//     this.loadCourses();
//   }

//   // Load all courses
//   loadCourses(): void {
//     this.isLoading = true;
//     this.courseService.getCourse().subscribe(
//       (data: Course[]) => {
//         this.courses = data;
//         this.isLoading = false;
//       },
//       (error) => {
//         console.error('Error loading courses:', error);
//         this.isLoading = false;
//       }
//     );
//   }

//   // Edit a specific course
//   editCourse(course: Course): void {
//     course.isEditing = true; // Enable editing for the selected course
//   }

//   // Save updated course details
//   onSubmit(courseId: string): void {
//     const updatedCourse = this.courses.find(course => course.id === courseId);
//     if (updatedCourse) {
//       this.courseService.updateCourse(updatedCourse).subscribe(
//         (response) => {
//           updatedCourse.isEditing = true; // Exit editing mode
//           console.log('Course updated successfully:', response);
//         },
//         (error) => {
//           console.error('Error updating course:', error);
//         }
//       );
//     }
//   }

//   // Cancel editing and revert changes
//   closeEdit(course: Course): void {
//     course.isEditing = true; // Exit editing mode
//     this.courseService.getCourseById(course.id).subscribe(
//       (originalCourse) => {
//         // Revert to original course details
//         Object.assign(course, originalCourse);
//       },
//       (error) => {
//         console.error('Error fetching original course data:', error);
//       }
//     );
//   }

//   // Delete a course
//   deleteCourse(courseId: string): void {
//     if (confirm('Are you sure you want to delete this course?')) {
//       this.courseService.deleteCourse(courseId).subscribe(
//         () => {
//           this.courses = this.courses.filter(course => course.id !== courseId);
//           console.log('Course deleted successfully');
//         },
//         (error) => {
//           console.error('Error deleting course:', error);
//         }
//       );
//     }
//   }
// }
}