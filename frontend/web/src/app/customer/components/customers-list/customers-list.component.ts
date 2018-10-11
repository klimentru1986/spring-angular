import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customer: Customer[];
  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'email',
    'phone',
    'update',
    'delete'
  ];

  constructor(private customerAPI: CustomerApiService) {}

  ngOnInit() {
    this.getCustomers();
  }

  deleteCustomer(id: number): void {
    this.customerAPI
      .deleteCustomer(id)
      .pipe(first())
      .subscribe(() => this.getCustomers());
  }

  private getCustomers(): void {
    this.customerAPI
      .getCustomers()
      .pipe(first())
      .subscribe(c => (this.customer = c));
  }
}
