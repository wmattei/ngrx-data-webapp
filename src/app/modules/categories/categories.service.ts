
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from 'ngrx-data';

import { BaseService } from '../../store/base.service';
import { Category } from './category-model';


@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService<Category> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super(serviceElementsFactory, 'Category');
    }
}