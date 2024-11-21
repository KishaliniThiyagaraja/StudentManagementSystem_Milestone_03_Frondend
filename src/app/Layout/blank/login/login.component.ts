import { Router } from '@angular/router';
import { TimeTableComponent } from './../../../Components/manager/time-table/time-table.component';
import { TimeTableService } from './../../../time-table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

   login : LoginRequest;

   constructor(private TimeTableService: TimeTableService, private router: Router){
    this.login = {UserId: '', password: ''};
   }


   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){

  }
}

export interface LoginRequest{
  UserId:string;
  password:string;
}
