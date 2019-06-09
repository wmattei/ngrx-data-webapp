import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/model/category';
import { CategoryService } from '../category.service';
import { EntityOp } from 'ngrx-data';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public loading$: Observable<boolean>;
  public categories$: Observable<Category[]>;


  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.entities$;
    this.loading$ = categoryService.loading$;
  }

  ngOnInit() {
    this.categoryService.getAll();
  }

  addCatagory(){
    let category: Category = {
      name: 'Teste'
    }

    this.categoryService.add(category);
  }


}
