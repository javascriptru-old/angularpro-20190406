import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw';

  constructor(swUpdate: SwUpdate, swPush: SwPush) {
    // swUpdate.available.subscribe()
    // swUpdate.checkForUpdate()

    // swPush.requestSubscription()

  }
}
