import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesResourceService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>("https://localhost:5001/api/catalogs");
  }
  createNewCategory(category: Category){
    return this.http.post<Category>("https://localhost:5001/api/catalogs",category);
  }
}
