import { Component, AfterViewInit, ViewChild, ViewContainerRef, ElementRef, OnInit, Optional, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotelInventoryapp';


  //@Optional() is a decorator which is used to make the dependency optional
  //It will not throw an error if the dependency is not provided
  //It will return null if the dependency is not provided
  //It is used to avoid the circular dependency
  //LoggerService is a service which is used to log the messages
  constructor(@Optional() private logger: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage,
  private initService: InitService) {
    console.log(this.initService.config);

   }
  //@Host() is a decorator which is used to get the instance of the service




  ngOnInit(): void {
    this.localStorage.setItem('name', 'Hotel India');
    this.logger?.Log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = 'Hotel India';
  }
  /*Loading the RoomComponent Dynamically */

  //ViewChild is a decorator which is used to get the reference of the child component
  //ViewContainerRef is a class which is used to get the reference of the child component
  //user is the variable which will hold the reference of the child component

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef; //Used to dynamic component creation

  @ViewChild('name', {read: ElementRef}) name!: ElementRef; 
  ngAfterViewInit(): void {
    //createComponent is a method which is used to create the component dynamically
    //RoomsComponent is the component which we are creating dynamically

    // const componentRef = this.vcr.createComponent(RoomsComponent);

    //We can pass the data to the child component using the instance property
    //numberOfRooms is the property of the child component

    // componentRef.instance.numberOfRooms = 20;

    this.name.nativeElement.innerText = 'Hotel India';
  }


  role: string = 'Admin';
}
