import { Component, OnInit } from '@angular/core';
import { BookDataService } from 'src/app/store/book-data.service';
import { Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private bookData: BookDataService, private router: Router) {}

  onSubmit(book: Book): void {
    this.bookData
      .add(book)
      .pipe(first())
      .subscribe(c => this.router.navigateByUrl('/book/list'));
  }
}
