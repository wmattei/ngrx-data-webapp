
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';

import { map, tap } from 'rxjs/operators';
import { Category } from '../core/model/category';


@Injectable({ providedIn: 'root' })
export class CategoryService extends EntityCollectionServiceBase<Category> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Category', serviceElementsFactory);
    }

}