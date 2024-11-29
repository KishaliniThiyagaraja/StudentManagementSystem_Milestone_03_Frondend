import { TimeTable } from '../../model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  [x: string]: any;

  url = 'https://localhost:7229/api/TimetableControllers';

  constructor(private http: HttpClient) { }

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
