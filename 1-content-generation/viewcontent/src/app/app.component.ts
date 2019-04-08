import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';

/*
  template: `
   <div *ngFor="let i of [1,2,3,4,5]">
     <div *delay="i * 500">test</div>
   </div>
*/


@Component({
  selector: 'app-root',
  template: `
     <ng-container *ngComponentOutlet="dynamicBanner"> 
     </ng-container>
  `
})
export class AppComponent {
  title = 'viewcontent';

  dynamicBanner = BannerComponent;

  constructor(
    private view: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {

    setTimeout(_ => {
      this.dynamicBanner = Banner2Component;
    }, 3000);

    //const bannerFactory = this.cfr.resolveComponentFactory(BannerComponent);
    // const bannerComponent = this.view.createComponent(bannerFactory);

  }


}

/**


<div *delay>test</div>


<ng-template [delay]>
  <div>test</div>
</ng-template>




 */
