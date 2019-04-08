import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<div (click)="onlclick()">Hello {{name}}!</div>`
})
export class HelloComponent implements OnInit {

  @Input() name;
  @Output() clicked: EventEmitter<string> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  onlclick() {
    this.clicked.emit('something');
  }

}
