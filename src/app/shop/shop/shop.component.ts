import { Component, OnInit } from '@angular/core';
import {CategoriesResourceService} from "../services/categories-resource.service";
import {Category} from "../models/category";
import {ProductResourceService} from "../services/product-resource.service";
import {Product} from "../models/product";
import {CategoryDataService} from "../../shared/services/category-data.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  categories: Category[];
  allProducts: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(private categoriesService: CategoriesResourceService, private productsService: ProductResourceService,
              private categoryDataService: CategoryDataService) {

  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.getAllProducts(this.categories);
    });
    this.categoryDataService.categoryName$.subscribe((categoryName)=> {
      console.log(categoryName);
      this.selectedProducts = this.allProducts.filter((product)=>{
        return product.catalogName === categoryName;
      })
    })
  }

  getAllProducts(categories: Category[]){
    this.productsService.getAllProducts(categories).subscribe((categories) =>{
      console.log(categories);
      categories.forEach((category) => {
        category.products.forEach((product) =>{
          product.catalogName = category.name;
          this.allProducts.push(product);
        })
      })
      this.selectedProducts = this.allProducts;
    });
  }



}
