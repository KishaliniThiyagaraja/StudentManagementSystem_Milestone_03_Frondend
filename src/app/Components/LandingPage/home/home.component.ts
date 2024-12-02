import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses = [
    { title: 'Beginner to Pro in HTML', category: 'Full Stack Development', image: '/course01.jpg' },
    { title: 'Introduction to CSS', category: 'Web Design', image: '/course02.jpg' },
    { title: 'Frameworks', category: 'Full Stack Development', image: '/course03.jpg' },
    { title: 'Web Development Deployment', category: 'Web Development', image: '/course04.jpg' }
  ];
}
