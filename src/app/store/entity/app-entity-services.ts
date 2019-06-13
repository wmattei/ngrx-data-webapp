import { Injectable } from '@angular/core';
import { EntityServicesElements, EntityServicesBase } from 'ngrx-data';
import { CategoryService } from 'src/app/categories/categories.service';


@Injectable()
export class AppEntityServices extends EntityServicesBase {
  constructor(
    entityServicesElements: EntityServicesElements,
    // Inject custom services, register them with the EntityServices, and expose in API.
    public readonly categoryService: CategoryService,
  ) {
    super(entityServicesElements);
    this.registerEntityCollectionServices([categoryService]);
  }

}
