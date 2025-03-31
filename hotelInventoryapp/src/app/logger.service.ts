import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class LoggerService {

  constructor() { }

  Log(msg:String){
    console.log(msg);
  }
}
