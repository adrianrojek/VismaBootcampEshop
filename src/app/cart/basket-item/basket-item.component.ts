import {Component, Input, OnInit} from '@angular/core';
import {BasketItem} from "../../shop/models/basketItem";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() basketItem : BasketItem;
  itemSum= 0;
  constructor() { }

  ngOnInit(): void {
    this.itemSum=this.getItemSum();
  }

  getItemSum() {
    return this.basketItem.product.price * this.basketItem.amount;
  }
}
