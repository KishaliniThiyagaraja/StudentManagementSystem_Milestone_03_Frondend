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
   userId: string = '';
   password: string = '';
   errorMessage: string = '';
  authService: any;

   constructor(private TimeTableService: TimeTableService, private router: Router){
    this.login = {UserId: '', password: ''};
   }

   logins() {
    const user = this.authService.login(this.username, this.password);
    if (user) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  username(username: any, password: string) {
    throw new Error('Method not implemented.');
  }

   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.TimeTableService.login(this.login).subscribe(daat =>{
this.router.navigate(['/Managar/timetableview']);
    })

  }
}

export interface LoginRequest{
  UserId:string;
  password:string;
}
