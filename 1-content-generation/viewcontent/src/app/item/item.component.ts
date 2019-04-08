import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
     <h1 #h="colory" colory>Title</h1>
     <button (click)="h.changeColor('green')"></button>
     <input type="text" (input)="h.changeColor($event.target.value)">

  
     <app-child >
  
     
      <main>Body</main>

      <app-item2></app-item2>
  
      </app-child>`
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
