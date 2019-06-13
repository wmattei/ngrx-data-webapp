
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';

import { map, shareReplay } from 'rxjs/operators';
import { Pageable } from '../core/model/pageable';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class BaseService<T> extends EntityCollectionServiceBase<T> {

    public pagination$: Observable<Pageable<T>>;

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, entityName: string) {
        super(entityName, serviceElementsFactory);
        
        //create new observable for pagination
        this.pagination$ = this.store.pipe(
            map((state: any) => {
                let entityCache = state.entityCache[entityName];
                return <Pageable<T>>{
                    page: entityCache.page,
                    includes: entityCache.includes,
                    data: entityCache.entities
                }
            })
        )
    }
    



}