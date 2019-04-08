import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyStrategy } from './my-strategy';

const routes: Routes = [
  { path: '', component: HomeComponent,
    data: {
      preload: true
    }
  },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MyStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
