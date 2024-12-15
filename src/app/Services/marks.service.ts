import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarksService {
  baseUrl = `http://localhost:5075/api/MarksControllers`
  constructor(private http : HttpClient) { }
  addMarks(obj : any){
    return this.http.post(this.baseUrl , obj)
  }

  getMarksByExamId(examId : string){
    return this.http.get<any[]>(`${this.baseUrl}/Get-Marks-By-ExamId?examId=${examId}`)
  }
  approveMarks(obj :any){
    return this.http.put(`${this.baseUrl}?Id=${obj.id}` , obj)
  }
}
