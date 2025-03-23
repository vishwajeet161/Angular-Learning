import { Component, AfterViewInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'hotelInventoryapp';

  constructor() { }


  /*Loading the RoomComponent Dynamically */

  //ViewChild is a decorator which is used to get the reference of the child component
  //ViewContainerRef is a class which is used to get the reference of the child component
  //user is the variable which will hold the reference of the child component
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {read: ElementRef}) name!: ElementRef;
  ngAfterViewInit(): void {
    //createComponent is a method which is used to create the component dynamically
    //RoomsComponent is the component which we are creating dynamically
    const componentRef = this.vcr.createComponent(RoomsComponent);
    //We can pass the data to the child component using the instance property
    //numberOfRooms is the property of the child component
    componentRef.instance.numberOfRooms = 20;

    this.name.nativeElement.innerText = 'Hotel India';
  }


  role: string = 'Admin';
}
