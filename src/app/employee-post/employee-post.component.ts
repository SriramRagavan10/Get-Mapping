import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-post',
  templateUrl: './employee-post.component.html',
  styleUrl: './employee-post.component.css'
})
export class EmployeePostComponent {
  employees:Employee=new Employee();
  constructor(private empService: EmployeeService, private router : Router) {}

  // click() {
  //   console.log(this.employees)
  // }
  saveEmployee() {
    this.empService.postEmployee(this.employees);
    this.router.navigate(['/get'], { replaceUrl :true } );
  }

}
