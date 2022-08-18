import {Component, Input, OnInit} from '@angular/core';
import {BasketItem} from "../../shop/models/basketItem";
import {BasketDataService} from "../../shared/services/basket-data.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  totalSum: 0;
  constructor(public basketService: BasketDataService) { }

  ngOnInit(): void {
    // this.basketService.currentBasket.forEach((item) =>{
    //   this.totalSum += item.amount * item.product.price;
    //   }
    // )
    debugger;
  }

}
