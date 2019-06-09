import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from "./category.service";
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';
import { CategoriesRoutes } from "./categories.routes";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CategoriesRoutes)
  ],
  declarations: [
    CategoriesComponent, 
    CategoryListComponent, 
  ],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule { }
