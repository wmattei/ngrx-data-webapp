import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from 'ngrx-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../../core/model/category'

@Injectable()
export class CategoryDataService extends DefaultDataService<Category> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
  ) {
    super('Category', http, httpUrlGenerator);
  }

}
