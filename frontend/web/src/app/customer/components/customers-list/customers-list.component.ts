import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer.model';
import { CustomerDataService } from 'src/app/store/customer-data.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customer$: Observable<Customer[]>;
  displayedColumns: string[] = [
    'id',
    'lastName',
    'firstName',
    'email',
    'phone',
    'update',
    'delete'
  ];

  constructor(private customerData: CustomerDataService) {}

  ngOnInit() {
    this.customer$ = this.customerData.entities$;
    this.customerData.load();
  }

  deleteCustomer(id: number): void {
    this.customerData.delete(id);
  }
}
