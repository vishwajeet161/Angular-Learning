import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  //ChangeDetectionStrategy is a core concept in Angular which is used to improve the performance of the application
  //OnPush is a strategy which is used to detect the changes only when the input property is changed from the parent component
  //It will not detect the changes when the input property is changed from it's child component
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  
  //we are making rooms as valid input property so that we can pass the data from parent component to child component
  //Input is a decorator which is used to pass the data from parent component to child component
  @Input() rooms: RoomList[] | null = [];
  @Input() title: string = '';
  //Output is a decorator which is used to pass the data from child component to parent component
  //EventEmitter is a class which is used to emit the event
  //selectedRoom is the event which will be emitted to the parent component
  //RoomList is the type of data which will be emitted
  @Output() selectedRoom = new  EventEmitter<RoomList>();
  constructor() { }
 

  //ngOnChanges is a lifecycle hook which is called by Angular when the input property is changed
  //It will take the changes as an argument which is of type SimpleChanges
  //SimpleChanges is an interface which is used to get the previous value and current value of the input property
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
      
  }

  ngOnInit(): void {
    
  }

  //selectRoom is a method which will be called when we click on the room
  //It will emit the selected room to the parent component
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

  //ngOndestroy is a lifecycle hook which is called by Angular when the component is destroyed
  //It should be used to clean up the resources which are used by the component
  //It should be used to unsubscribe the observables and remove the event listeners
  //It should be used to remove the child components which are created dynamically
  ngOnDestroy(): void{
    console.log("Rooms List Component is destroyed");
  }
}
