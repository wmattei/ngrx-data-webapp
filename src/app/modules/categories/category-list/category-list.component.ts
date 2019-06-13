import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../categories.service';
import { Category } from '../category-model';
import { Pageable } from 'src/app/core/model/pageable';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public loading$: Observable<boolean>;
  public categories$: Observable<Category[]>;

  public page$: Observable<Pageable<Category>>;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.entities$;
    this.loading$ = this.categoryService.loading$;
    this.page$ = this.categoryService.pagination$;
  }

  ngOnInit() {
    this.categoryService.getAll();
  }

  addCatagory() {
    let category: Category = {
      title: 'Teste'
    }

    this.categoryService.add(category);
  }


}
