import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AddBookComponent }
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
  declarations: [BookComponent, AddBookComponent, AddBookFormComponent]
})
export class BookModule {}
