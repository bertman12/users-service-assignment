import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  totalChanges: number = 0;

  constructor() { }
  
  printChanges(){
    alert("The total number of changes " + this.totalChanges);
  }
}
