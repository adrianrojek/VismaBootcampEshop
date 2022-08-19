import { Component, OnInit } from '@angular/core';
import {CategoryDataService} from "../../shared/services/category-data.service";
import {Category} from "../../shop/models/category";
import {CategoriesResourceService} from "../../shop/services/categories-resource.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductResourceService} from "../../shop/services/product-resource.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  categories: Category[];
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private categoryDataService: CategoryDataService,
              private categoryResourceService: CategoriesResourceService,private productResourceService: ProductResourceService) { }

  ngOnInit(): void {
    if (!this.categoryDataService.categories){
      this.categoryResourceService.getCategories().subscribe((categories)=>{
        this.categories = categories;
      })
    }else{
      this.categories = this.categoryDataService.categories;
    }
    this.productForm = this.formBuilder.group({
      category: ['',[Validators.required]],
      name: ['',[Validators.maxLength(20),Validators.required]],
      description:['',[Validators.maxLength(50),Validators.required]],
      price:[null,[Validators.required,Validators.min(0)]]
    });
  }

  createNewProduct() {
    if(this.productForm.invalid){
      return;
    }
    const newProduct = {
      name: this.productForm.controls["name"].value,
      description: this.productForm.controls["description"].value,
      price: this.productForm.controls["price"].value,
    }
    this.productResourceService.createNewProduct(newProduct,this.productForm.controls["category"].value).subscribe(()=>{
      this.productForm.reset();
    });
  }

}
