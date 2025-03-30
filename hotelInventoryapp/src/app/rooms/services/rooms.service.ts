import { Injectable, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService  {

  constructor() { }

  roomList: RoomList[] = [{
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

  getRooms(){
    return this.roomList;
  }
}
