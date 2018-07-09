import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';
import { Customer } from '../../models/customer.model';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  constructor(
    private customerAPI: CustomerApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(customer: Customer): void {
    this.customerAPI
      .createCustomer(customer)
      .pipe(first())
      .subscribe(c => this.router.navigateByUrl('/customer/list'));
  }
}
