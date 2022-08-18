import { Injectable } from '@angular/core';
import {Product} from "../../shop/models/product";
import {BasketItem} from "../../shop/models/basketItem";

@Injectable({
  providedIn: 'root'
})
export class BasketDataService {
  currentBasket: BasketItem[] = [];
  constructor() { }

  addItemToBasket(product: Product,amount: number){
    const basketItem = {
      product,
      amount
    }
    this.currentBasket.push(basketItem);
  }
}
