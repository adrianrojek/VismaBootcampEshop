import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket/basket.component';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "../admin/admin/admin.component";
import { BasketItemComponent } from './basket-item/basket-item.component';
import {ShopModule} from "../shop/shop.module";

const routes: Routes = [
  { path: '',  component: BasketComponent }
];
export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    BasketComponent,
    BasketItemComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        routing,
        ShopModule
    ]
})
export class CartModule { }
