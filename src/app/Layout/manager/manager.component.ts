import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl:'./manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent implements  OnInit {

  name = '';
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.name = localStorage.getItem("Name") || '';
  }

  logout(){
     this.router.navigate(['/'])
  }
}
