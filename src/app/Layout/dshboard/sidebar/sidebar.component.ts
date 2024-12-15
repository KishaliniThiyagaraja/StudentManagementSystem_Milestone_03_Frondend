import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { 
    this.userRole = localStorage.getItem('role') || '';
    this.userId = localStorage.getItem('userId') || '';
    console.log(this.userId)
    console.log(this.userRole)
  }
  userRole: string = ''
  userId : string = ''
  ngOnInit(): void {
 
  }
  routeTimeTable() {
     this.router.navigate([`dashboard/${this.userRole}/timetable`])
  }
  routeAttendance(){
    this.router.navigate([`dashboard/${this.userRole}/attendance`])
  }
  routeCourses(){
    this.router.navigate([`dashboard/${this.userRole}/course`])
  }
  routeStudent(){
    this.router.navigate([`dashboard/${this.userRole}/students`])
  }
  routeMarks(){
    this.router.navigate([`dashboard/${this.userRole}/exams`])
  }
  myProfile(){
    console.log(this.userId);
    this.router.navigate(['dashboard/Staff/students' , this.userId])
  }
}
