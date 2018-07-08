import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRouterModule {}
