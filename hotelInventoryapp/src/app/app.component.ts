import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
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

  //ViewChild is a decorator which is used to get the reference of the child component
  //ViewContainerRef is a class which is used to get the reference of the child component
  //user is the variable which will hold the reference of the child component
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }

  role: string = 'Admin';
}
