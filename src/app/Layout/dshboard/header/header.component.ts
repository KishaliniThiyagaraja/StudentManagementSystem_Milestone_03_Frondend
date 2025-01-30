import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userRole = '';
  constructor(private router : Router){
    this.userRole = localStorage.getItem('role') || ''
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.querySelector('#mainNav');
    if (window.scrollY > 0) {
      navbar?.classList.add('navbar-shrink');
    } else {
      navbar?.classList.remove('navbar-shrink');
    }
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
  routeHome(){
      this.router.navigate([`dashboard/${this.userRole}`])
    
  }
}