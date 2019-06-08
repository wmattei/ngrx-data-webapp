import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


export const CategoriesRoutes: Routes = [
    {path: '', pathMatch: 'full', component: CategoriesComponent, children: [
        {path: '', component: CategoryListComponent},
        {path: ':id', component: CategoryDetailComponent}
    ]},
];