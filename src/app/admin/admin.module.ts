import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home-page/home/home.component";

const routes: Routes = [
  { path: '',  component: AdminComponent }
];
export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    routing
  ]
})
export class AdminModule { }
