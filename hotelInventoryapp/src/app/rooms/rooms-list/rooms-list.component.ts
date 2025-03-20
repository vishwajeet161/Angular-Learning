import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit{
  
  //we are making rooms as valid input property so that we can pass the data from parent component to child component
  //Input is a decorator which is used to pass the data from parent component to child component
  @Input() room: RoomList[] = [];

  //Output is a decorator which is used to pass the data from child component to parent component
  //EventEmitter is a class which is used to emit the event
  //selectedRoom is the event which will be emitted to the parent component
  //RoomList is the type of data which will be emitted
  @Output() selectedRoom = new  EventEmitter<RoomList>();
  constructor() { }

  ngOnInit(): void {
    
  }

  //selectRoom is a method which will be called when we click on the room
  //It will emit the selected room to the parent component
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
