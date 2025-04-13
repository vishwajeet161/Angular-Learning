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
    console.log(this.employeeComponent);
    //this.employeeComponent is used to get the instance of the child component
    //employeeName is the property of the child component
    this.employeeComponent.employeeName = 'Employee Name';
   
  }

}
