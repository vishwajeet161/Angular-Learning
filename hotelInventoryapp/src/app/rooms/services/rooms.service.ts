import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

// This service is used to get the list of rooms from the server
// It is a singleton service which means it will be created only once and will be used throughout the application
// It is provided in the root module which means it will be available throughout the application
// It is a good practice to provide the service in the root module so that it can be used throughout the application
@Injectable({
  providedIn: 'root'
})
export class RoomsService  {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { 
    console.log(config.apiEndpoint);
    // This is used to get the api endpoint from the environment file
    console.log("Service is created");
  }

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
