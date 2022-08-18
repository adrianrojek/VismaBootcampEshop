import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  categoryName$ = new Subject<string>();

  constructor() { }
}
