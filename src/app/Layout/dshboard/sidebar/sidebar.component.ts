import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }
  userRole: string = ''
  ngOnInit(): void {
    this.userRole = localStorage.getItem('role') || '';
    console.log(this.userRole)
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
}
