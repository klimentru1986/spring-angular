import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', loadChildren: '../customer/customer.module#CustomerModule' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRouterModule {}