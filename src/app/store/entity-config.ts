import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
    Post: {},
    Category: {}
};


const pluralNames = { Category: 'Categories' };

export const entityConfig = {
    entityMetadata,
    pluralNames
};