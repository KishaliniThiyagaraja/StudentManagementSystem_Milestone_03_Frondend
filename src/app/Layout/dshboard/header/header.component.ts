import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.querySelector('#mainNav');
    if (window.scrollY > 0) {
      navbar?.classList.add('navbar-shrink');
    } else {
      navbar?.classList.remove('navbar-shrink');
    }
  }
}