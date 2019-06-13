import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/model/category';
import { CategoryService } from '../categories.service';
import { AppEntityServices } from 'src/app/store/entity/app-entity-services';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public loading$: Observable<boolean>;
  public categories$: Observable<Category[]>;

  private service: CategoryService;

  constructor(appEntityServices: AppEntityServices) {
    this.service = appEntityServices.categoryService;
    this.categories$ = this.service.entities$;
    this.loading$ = this.service.loading$;
  }

  ngOnInit() {
    this.service.getAll()
  }

  addCatagory() {
    let category: Category = {
      name: 'Teste'
    }

    this.service.add(category);
  }


}
