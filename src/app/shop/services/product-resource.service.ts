import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {environment} from "../../../environments/environment";
import {Category} from "../models/category";
import {forkJoin, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductResourceService {

  constructor(private http: HttpClient) { }

  getAllProducts(categories: Category[]): Observable<Category[]>{
    return forkJoin(
      categories.map((category)=>{
        return this.http.get<Category>(environment.baseUrl+"catalogs/"+category.publicId+"/products");
      })
    )
  }

  createNewProduct(product: Product, categoryId:string):Observable<Product>{
    return this.http.post<Product>(environment.baseUrl+"catalogs/"+categoryId+"/products",product);
  }
}
