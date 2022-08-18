import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {BasketDataService} from "../../shared/services/basket-data.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product : Product;
  amount = 0;
  isInvalid = false;

  constructor(private basketService: BasketDataService) { }

  ngOnInit(): void {
  }

  addItemToBasket() {
    if(this.amount < 1 || this.amount > 20){
      this.isInvalid = true;
      return
    }else{
      this.isInvalid = false;
      this.basketService.addItemToBasket(this.product,this.amount);
      console.log(this.basketService.currentBasket);
    }
  }
}
