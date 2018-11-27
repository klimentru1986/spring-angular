import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './components/add-book/add-book.component';
import { SharedModule } from '../shared/shared.module';
import { BookFormComponent } from './components/book-form/book-form.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AddBookComponent },
      { path: 'list', component: BooksListComponent },
      { path: 'edit/:id', component: EditBookComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    BookComponent,
    AddBookComponent,
    BookFormComponent,
    EditBookComponent,
    BooksListComponent
  ]
})
export class BookModule {}
