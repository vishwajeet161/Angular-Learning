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

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [{
    roomNumber: 101,
    roomType: 'Deluxe Room',
    amenities: 'AC, TV, Wifi, Breakfast',
    price: 5000,
    photos: 'assets/deluxe.jpg',
    checkinTime: new Date('2021-09-01'),
    checkoutTime: new Date('2021-09-10')
  },
  {
    roomNumber: 102,
    roomType: 'Super Deluxe Room',
    amenities: 'AC, TV, Wifi, Breakfast, Lunch, Dinner',
    price: 10000,
    photos: 'assets/superdeluxe.jpg',
    checkinTime: new Date('2021-09-01'),
    checkoutTime: new Date('2021-09-10')
  },
  {
    roomNumber: 103,
    roomType: 'Suite Room',
    amenities: 'AC, TV, Wifi, Breakfast, Lunch, Dinner, Bar',
    price: 15000,
    photos: 'assets/suite.jpg',
    checkinTime: new Date('2021-09-01'),
    checkoutTime: new Date('2021-09-10')
  }

  ]
  constructor() {}

  ngOnInit() {}

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
