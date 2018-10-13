import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Customer } from '../customer/models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerDataService extends EntityCollectionServiceBase<Customer> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Customer', serviceElementsFactory);
  }
}
