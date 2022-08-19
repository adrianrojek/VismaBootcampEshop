import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Category} from "../../shop/models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  categoryName$ = new Subject<string>();
  categories : Category[];

  constructor() { }
}
