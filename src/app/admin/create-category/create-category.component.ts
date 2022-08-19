import { Component, OnInit } from '@angular/core';
import {CategoriesResourceService} from "../../shop/services/categories-resource.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  nameErrorMessage='Name field cannot be empty';
  descErrorMessage= 'Description field cannot be empty';

  get nameControl(){
    return this.categoryForm.controls["name"];
  }
  get descControl(){
    return this.categoryForm.controls["description"];
  }

  constructor(private formBuilder:FormBuilder,private categoryService: CategoriesResourceService) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['',[Validators.maxLength(20),Validators.required]],
      description:['',[Validators.maxLength(50),Validators.required]],
    });
    this.categoryForm.valueChanges.subscribe((form)=> {
      console.log(this.nameControl);
      if(this.nameControl.errors && this.nameControl.errors["maxlength"]){
        this.nameErrorMessage = "Name is too long"
      }else if(this.nameControl.errors && this.nameControl.errors["required"]){
        this.nameErrorMessage = "Name field cannot be empty"
      }
      if(this.descControl.errors && this.descControl.errors["maxlength"]){
        this.descErrorMessage = "Description is too long"
      }else if(this.descControl.errors && this.descControl.errors["required"]){
        this.descErrorMessage = "Description field cannot be empty"
      }
    })
  }

  createNewCategory() {
    if(this.categoryForm.valid){
      this.categoryService.createNewCategory(this.categoryForm.value).subscribe((category)=>{});
    }
  }
}
