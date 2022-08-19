import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home-page/home/home.component";
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '',  component: AdminComponent }
];
export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    AdminComponent,
    CreateProductComponent,
    CreateCategoryComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        routing,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
