import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];
  constructor(private empService: EmployeeService) {}
  ngOnInit(): void {
    this.empService.getEmployeeList().subscribe(data =>
      {
        this.employees=data
      }
    )
  }

}
