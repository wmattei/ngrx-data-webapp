import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'categories'},
    {path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)},
]