import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDataService } from 'src/app/store/customer-data.service';
import { first } from 'rxjs/operators';
import { BookDataService } from 'src/app/store/book-data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookData: BookDataService
  ) {}

  ngOnInit() {
    this.getBookById();
  }

  onSubmit(book: Book): void {
    this.bookData
      .update(book)
      .pipe(first())
      .subscribe(c => this.router.navigateByUrl('/book/list'));
  }

  private getBookById(): void {
    const id: number = +this.route.snapshot.params['id'];

    if (!id) {
      this.router.navigateByUrl('/customer/list');
      return;
    }

    this.book$ = this.bookData.getByKey(id);
  }
}
