import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      "http://localhost:1999/emp/getAll"
    );
  }
  
  postEmployee(employee:Employee) {
    this.httpClient.post<Employee> (
      "http://localhost:1999/emp/insert",employee).subscribe(x=>alert("Saved"));
  }
}
