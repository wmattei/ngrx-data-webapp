import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from 'ngrx-data';

const API = '127.0.0.1:8000/api';

import { Category } from "../core/model/category";

@Injectable({ providedIn: 'root' })
export class CategoryService extends EntityCollectionServiceBase<Category> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Category', serviceElementsFactory);
    }


}