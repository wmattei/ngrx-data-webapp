import { NgModule } from '@angular/core';
import { DefaultDataServiceConfig, EntityDataService, EntityServices, NgrxDataModule, EntityCollectionReducerRegistry, EntityCollection, EntityAction, EntityCollectionReducerMethodsFactory } from 'ngrx-data';
import { environment } from 'src/environments/environment';
import { AppEntityServices } from './app-entity-services';
import { CategoryDataService } from './category-data-service';
import { entityMetadata } from './entity-metadata';
import { AppEntityCollectionReducerMethodsFactory } from './app-entity-reducer-methods';


const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.API_URL+'/api',

  entityHttpResourceUrls: {
    Category: {
      entityResourceUrl: environment.API_URL+'/api/categories/',
      collectionResourceUrl: environment.API_URL+'/api/categories/'
    }
  },

  timeout: 3000, // request timeout
};

@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata
    })
  ],
  providers: [
    AppEntityServices,
    { provide: EntityServices, useExisting: AppEntityServices },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: EntityCollectionReducerMethodsFactory, useClass: AppEntityCollectionReducerMethodsFactory },


    CategoryDataService
  ]
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    categoryDataService: CategoryDataService,
    entityCollectionReducerRegistry: EntityCollectionReducerRegistry
  ) {
    // Register custom EntityDataServices
    entityDataService.registerService('Category', categoryDataService);
  }

}
