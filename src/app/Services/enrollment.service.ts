import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http : HttpClient) { }

  addEnrollments(obj : any){
    return this.http.post(`http://localhost:5075/api/EnrollmentControllers` , obj)
  }
}
