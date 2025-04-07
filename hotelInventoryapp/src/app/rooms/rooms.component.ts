import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName: string = 'Hotel India';
  numberOfRooms: number = 10;
  title: string = 'Room List';
  hideRooms: boolean = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });
  //Constructor should be used only for dependency injection(some services injection) and not for logic
  //Constructor should have any blocking code, it should be on ngOnInit
  constructor(private roomService: RoomsService) { }
  

  //ViewChildren is a decorator which is used to get the reference of the child component
  //HeaderComponent is the child component which we are getting the reference
  //headerChildreenComponent is the variable which will hold the reference of the child component
  //ViewChildren will access all the instances of the child component which are available on your template
  @ViewChildren(HeaderComponent) headerChildreenComponent!: QueryList<HeaderComponent>;


  //ViewChild is a decorator which is used to get the reference of the child component
  //HeaderComponent is the child component which we are getting the reference
  //headerComponent is the variable which will hold the reference of the child component
  //ViewChild will alwasy access first instance which is available on your template
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // ngDoCheck is a lifecycle hook called by Angular to indicate that Angular is done checking the component
  // It should be used for logic
  // It works in a way that after the checking of the component, it will be called
  ngDoCheck(): void {
    console.log("On Cahnges is called");
  }

  //ngOnInit is a lifecycle hook called by Angular to indicate that Angular is done creating the component
  //It should be used for logic
  //It works in a way that after the initialization of the component, it will be called
  /*
  If we want to load some data from API and we want to show it on the screen the we should wirte that part of code in ngOnInit, 
  this should now go to constructor or any other lifecycle hook
  */
  ngOnInit() {
    this.stream.subscribe(data => {console.log(data)});
    // console.log(this.headerComponent);
    // this.roomList = this.roomService.getRooms();
    this.roomService.getRooms().subscribe(rooms =>{
      this.roomList = rooms;
    })
   
  }

 

  //ngAfterViewInit is a lifecycle hook called by Angular to indicate that Angular is done creating the component view
  //It should be used for logic
  //It works in a way that after the initialization of the component view, it will be called
  //It is called after the ngAfterContentInit
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
    this.headerChildreenComponent.last.title = 'Last Header';

    // this.headerChildreenComponent.forEach((headerComponent) => {
    //   headerComponent.title = 'Childreen Header';
    // });
    
  }

  //ngAfterViewChecked is a lifecycle hook called by Angular to indicate that Angular is done checking the component view
  //It should be used for logic
  //It works in a way that after the checking of the component view, it will be called
  //It is called after the ngAfterViewInit
  ngAfterViewChecked(): void {
    
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
    
  }

  editRoom(){
    const newRoom: RoomList = {
      roomNumber: '3',
      roomType: 'Suite Room',
      amenities: 'AC, TV, Wifi, Breakfast, Lunch, Dinner, Bar',
      price: 20000,
      photos: 'assets/suite.jpg',
      checkinTime: new Date('2021-09-01'),
      checkoutTime: new Date('2021-09-10'), 
      rating: 4.811,   
   };
   this.roomService.editRoom(newRoom).subscribe((data) => {
    this.roomList = data;
   }
   );
  }

  //selectRoom is a method which will be called when we click on the room
  //It will emit the selected room to the parent component
  select1Room(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const newRoom: RoomList = {
      roomNumber: '104',
      roomType: 'Suite Room',
      amenities: 'AC, TV, Wifi, Breakfast, Lunch, Dinner, Bar',
      price: 15000,
      photos: 'assets/suite.jpg',
      checkinTime: new Date('2021-09-01'),
      checkoutTime: new Date('2021-09-10'), 
      rating: 4.811,   
   };
  // here are mutating the existing array which means we are changing the existing array, which is not a good practice
  //  this.roomList.push(newRoom);
  // here we are returning a new instance of roomList array with the new room added to it, we are not mutating the existing array.
  // this.roomList = [...this.roomList, newRoom];
  this.roomService.addRoom(newRoom).subscribe((data) => {
    this.roomList = data;
  }
  );
 }

}
