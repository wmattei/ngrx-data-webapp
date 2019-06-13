import { defaultSelectId, EntityMetadataMap, PropsFilterFnFactory } from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  Category: {
    additionalCollectionState: {
      page: null,
      includes: []
    }
  },

};

export const pluralNames = {
  Category: 'Categories'
};

