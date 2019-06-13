import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DefaultDataServiceConfig, NgrxDataModule, EntityCollectionReducerMethodsFactory } from 'ngrx-data';
import { entityConfig } from './entity-metadata';
import { AppEntityCollectionReducerMethodsFactory } from './reducer-methods';

const apiHost = 'https://22580d6b-23db-42e1-8d3f-e253f98e437b.mock.pstmn.io/api';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: apiHost,
  timeout: 3000, // request timeout,
  entityHttpResourceUrls:
  {
    Category: { 
      entityResourceUrl: `${apiHost}/categories`, 
      collectionResourceUrl: `${apiHost}/categories` 
    }
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    NgrxDataModule.forRoot(entityConfig),
  ],
  declarations: [],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: EntityCollectionReducerMethodsFactory, useClass: AppEntityCollectionReducerMethodsFactory },
  ]
})
export class AppStoreModule { }
