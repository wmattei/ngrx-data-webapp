import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';
import { CategoriesRoutes } from "./categories.routes";
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './categories.service';

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
