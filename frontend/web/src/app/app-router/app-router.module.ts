import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
  { path: 'customer', loadChildren: '../customer/customer.module#CustomerModule' },
  { path: 'book', loadChildren: '../book/book.module#BookModule' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRouterModule {}
