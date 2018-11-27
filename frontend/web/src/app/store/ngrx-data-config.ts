import { EntityMetadataMap } from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  Customer: {},
  Book: {}
};

export const pluralNames = {
  Customer: 'Customer',
  Book: 'Book'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
