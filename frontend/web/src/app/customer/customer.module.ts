import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerApiService } from './services/customer-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

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
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CustomerComponent, CustomersListComponent],
  providers: [CustomerApiService]
})
export class CustomerModule {}
