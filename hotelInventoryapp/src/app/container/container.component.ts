import { AfterContentInit, Component, OnInit, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, AfterContentInit {

  constructor() { }

  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this,this.employeeComponent.employeeName = 'Employee Name';
   
  }

}
