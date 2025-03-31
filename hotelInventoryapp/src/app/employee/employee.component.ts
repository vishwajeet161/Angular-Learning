import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService]
  // providers: [RoomsService] is used to provide the service to the component
  // If we want to provide the service to the whole application then we should provide it in app.module.ts
  // If we want to provide the service to the component then we should provide it in the component
  // If we want to provide the service to the module then we should provide it in the module
})
export class EmployeeComponent {
  employeeName: string = 'John Doe';

  //@Self() is a decorator which is used to get the instance of the service
  // It will not go to the parent component to get the instance of the service
  // It will only get the instance of the service which is provided in the component
  // when we are sure that the service is provided in the component and we don't want to go to the parent component to get the instance of the service
  // It is used to avoid the circular dependency
  constructor(@Self() private roomService: RoomsService) { 

  }
  //@SkipSelf() is a decorator which is used to get the instance of the service
  // It will go to the parent component to get the instance of the service
  // It will not get the instance of the service which is provided in the component
  // It is used to avoid the circular dependency
  // constructor(@SkipSelf() private roomService: RoomsService) {
  //   console.log(roomService);
  //}

}
