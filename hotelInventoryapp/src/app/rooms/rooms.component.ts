import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelName: string = 'Hotel India';
  numberOfRooms: number = 10;

  hideRooms: boolean = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [];

  //Constructor should be used only for dependency injection(some services injection) and not for logic
  //Constructor should have any blocking code, it should be on ngOnInit
  constructor() { }

  //ngOnInit is a lifecycle hook called by Angular to indicate that Angular is done creating the component
  //It should be used for logic
  //It works in a way that after the initialization of the component, it will be called
  /*
  If we want to load some data from API and we want to show it on the screen the we should wirte that part of code in ngOnInit, 
  this should now go to constructor or any other lifecycle hook
  */
  ngOnInit() {
    this.roomList = [{
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'AC, TV, Wifi, Breakfast',
      price: 5000,
      photos: 'assets/deluxe.jpg',
      checkinTime: new Date('2021-09-01'),
      checkoutTime: new Date('2021-09-10'),
      rating: 3.4678
    },
    {
      roomNumber: 102,
      roomType: 'Super Deluxe Room',
      amenities: 'AC, TV, Wifi, Breakfast, Lunch, Dinner',
      price: 10000,
      photos: 'assets/superdeluxe.jpg',
      checkinTime: new Date('2021-09-01'),
      checkoutTime: new Date('2021-09-10'),
      rating: 4.2
    },
    {
      roomNumber: 103,
      roomType: 'Suite Room',
      amenities: 'AC, TV, Wifi, Breakfast, Lunch, Dinner, Bar',
      price: 15000,
      photos: 'assets/suite.jpg',
      checkinTime: new Date('2021-09-01'),
      checkoutTime: new Date('2021-09-10'),
      rating: 4.811
    }

    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  //selectRoom is a method which will be called when we click on the room
  //It will emit the selected room to the parent component
  select1Room(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const newRoom: RoomList = {
      roomNumber: 104,
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
  this.roomList = [...this.roomList, newRoom];
 }

}
