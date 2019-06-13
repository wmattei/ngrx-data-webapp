import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';


export const CategoriesRoutes: Routes = [
    {path: '', pathMatch: 'full', component: CategoriesComponent, children: [
        {path: '', component: CategoryListComponent},
    ]},
];