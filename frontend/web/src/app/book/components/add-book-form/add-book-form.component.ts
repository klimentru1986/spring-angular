import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/customer/models/customer.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {
  @Input()
  book: Book;
  @Output()
  submitEv: EventEmitter<Book> = new EventEmitter();
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bookForm = this.initForm();
    if (this.book) {
      this.bookForm.patchValue(this.book);
    }
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      Object.values(this.bookForm.controls).forEach(c => c.markAsTouched());
      return;
    }

    this.submitEv.emit(this.bookForm.value);
  }

  private initForm(): FormGroup {
    return this.fb.group({
      id: [null],
      author: [null, [Validators.required]],
      title: [null, [Validators.required]],
      year: [null]
    });
  }
}
