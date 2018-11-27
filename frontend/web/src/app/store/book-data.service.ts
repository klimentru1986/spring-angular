import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Book } from '../book/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookDataService extends EntityCollectionServiceBase<Book> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Book', serviceElementsFactory);
  }
}
