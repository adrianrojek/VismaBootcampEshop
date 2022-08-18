import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../models/category";
import {CategoryDataService} from "../../shared/services/category-data.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: Category[];

  constructor(private categoryDataService : CategoryDataService) { }

  ngOnInit(): void {
  }

  selectCategory(categoryName: string) {
    this.categoryDataService.categoryName$.next(categoryName);
  }
}
