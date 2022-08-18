import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home-page/home/home.component";
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import {AppModule} from "../app.module";
import {CustomCurrencyPipe} from "../shared/pipes/currency.pipe";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '',  component: ShopComponent }
];
export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    ShopComponent,
    CategoriesComponent,
    ProductComponent,
    CustomCurrencyPipe
  ],
  exports: [
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    routing,
    FormsModule,

  ]
})
export class ShopModule { }
