import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements OnInit {
  navbarOpen = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    const navbarItems = document.querySelectorAll('.navbar-nav>li');
    navbarItems.forEach((navbarItem) => {
      navbarItem.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        // navbar.classList.remove('show');
      });
    });
  }

  loaded() {
    console.log("loaded");
  }
}