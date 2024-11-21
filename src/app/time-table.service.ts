import { TimeTable } from './../model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './Layout/blank/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  url = 'https://localhost:7229/api/TimetableControllers';

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest){
     return this.http.post(this.url + '/login', loginRequest,{
      responseType : 'text'
     });
  }

  getTables(){
    return this.http.get<TimeTable[]>(this.url);
  }

  createTable(timeTable:TimeTable){
    return this.http.post(this.url,timeTable);
  }

  deleteTable(Id:number){
    return this.http.delete(this.url + '/' + Id);
  }

  getTable(Id:number){
    return this.http.get<TimeTable>(this.url + '/' + Id);
  }

  updateTable(timeTable:TimeTable, Id:number){
    return this.http.put(this.url +'/'+ Id,timeTable)
  }
}
