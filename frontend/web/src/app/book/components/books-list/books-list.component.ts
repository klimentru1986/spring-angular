import { Component, OnInit } from '@angular/core';
import { BookDataService } from 'src/app/store/book-data.service';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  book$: Observable<Book[]>;
  displayedColumns: string[] = [
    'id',
    'author',
    'title',
    'year',
    'update',
    'delete'
  ];

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.book$ = this.bookData.entities$;
    this.bookData.load();
  }

  deleteBook(id: number): void {
    this.bookData.delete(id);
  }
}
