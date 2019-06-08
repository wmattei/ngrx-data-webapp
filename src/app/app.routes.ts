import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'categories'},
    {path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)},
    {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)}
]