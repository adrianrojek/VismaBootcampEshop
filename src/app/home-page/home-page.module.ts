import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '',  component: HomeComponent }
];
export const routing = RouterModule.forChild(routes);
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    routing,

  ]
})
export class HomePageModule {
}
