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
  customer$: Observable<Customer>;
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'email'];

  constructor(private customerAPI: CustomerApiService) {}

  ngOnInit() {
    this.customer$ = this.customerAPI.getCustomvers().pipe(first());
  }
}
