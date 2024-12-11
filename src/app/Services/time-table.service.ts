import { TimeTable } from '../../model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  [x: string]: any;

  url = 'http://localhost:5075/api/TimetableControllers';
  //http://localhost:5075/api/TimetableControllers?CourseId=61BFA7CA-38E3-457E-7BD3-08DD129B3360
//http://localhost:5075/api/TimetableControllers/Get-By-WeekNo?weekNo=51&year=2024
  constructor(private http: HttpClient) { }
  getTables(Date : string){
    console.log(Date);
    return this.http.get<TimeTable[]>(`${this.url}/${Date}`);
  }

  getTablesbyWeekNo(weekNo : number , year : number){
    return this.http.get<TimeTable[]>(`${this.url}/Get-By-WeekNo?weekNo=${weekNo}&year=${year}`)
  }
  createTable(table : any , courseId : string){
    console.log(courseId)
    return this.http.post(`${this.url}?CourseId=${courseId}`,table);
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

  addTable(obj : any){
    return this.http.post(this.url , obj)
  }
}
