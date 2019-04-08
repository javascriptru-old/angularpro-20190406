import { Component, Attribute, OnInit, ContentChild, ContentChildren, QueryList, ViewChild, AfterContentInit } from '@angular/core';
import { Item2Component } from '../item2/item2.component';

@Component({
  selector: 'app-child',
  template: `
     <ng-container *ngTemplateOutlet="element">
     </ng-container>
  `,

})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentInit {

  //@ContentChild('h') element: HTMLElement;
  //@ContentChild(Item2Component) element: Item2Component;
  // @ContentChild(Item2Component, {read: Item2Component}) element2: Item2Component;
  // @ContentChildren(MyDirective) 
  // @ContentChildren(UserService) 
  // @ContentChildren(UserService) elements: QueryList<Item2Component>;

  //@ViewChild('h') element3: HTMLElement;

  constructor( @Attribute('type') type = 'default') { }

  ngOnInit() {
  }
   

}
