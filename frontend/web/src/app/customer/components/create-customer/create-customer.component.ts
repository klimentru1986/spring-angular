import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CustomerDataService } from 'src/app/store/customer-data.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  constructor(
    private customerData: CustomerDataService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(customer: Customer): void {
    this.customerData
      .add(customer)
      .pipe(first())
      .subscribe(c => this.router.navigateByUrl('/customer/list'));
  }
}
