import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CustomersListComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
  declarations: [CustomerComponent, CustomersListComponent]
})
export class CustomerModule {}
