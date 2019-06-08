import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from "./category.service";
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component'
import { RouterModule } from '@angular/router';
import { CategoriesRoutes } from "./categories.routes";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(CategoriesRoutes)
  ],
  declarations: [
    CategoriesComponent, 
    CategoryListComponent, 
    CategoryDetailComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule { }
