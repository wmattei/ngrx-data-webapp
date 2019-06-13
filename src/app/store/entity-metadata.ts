import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
    Category: {
      additionalCollectionState: {
        page: null,
        includes: []
      }
    }
  };
  

  const pluralNames = { Category: 'Categories' };
  
  export const entityConfig = {
    entityMetadata,
    pluralNames
  };