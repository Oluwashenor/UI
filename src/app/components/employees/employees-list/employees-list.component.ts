import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: 9092930303,
      salary: 6000,
      department: 'Human Resources'
    },
    {
      id: '2',
      name: 'Adesina',
      email: 'ade.sina@gmail.com',
      phone: 49505900303,
      salary: 7000,
      department: 'Information Technology'
    }
  ];

  ngOnInit() {

  }
}
