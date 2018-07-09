import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerApiService } from './services/customer-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CustomersListComponent },
      { path: 'create', component: CreateCustomerComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CustomerComponent,
    CustomersListComponent,
    CustomerFormComponent,
    CreateCustomerComponent
  ],
  providers: [CustomerApiService]
})
export class CustomerModule {}
