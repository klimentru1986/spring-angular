import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerApiService } from '../../services/customer-api.service';
import { Customer } from '../../models/customer.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerAPI: CustomerApiService
  ) {}

  ngOnInit() {
    this.getCustomerById();
  }

  onSubmit(customer: Customer): void {
    this.customerAPI
      .updateCustomer(customer)
      .pipe(first())
      .subscribe(c => this.router.navigateByUrl('/customer/list'));
  }

  private getCustomerById(): void {
    const id: number = +this.route.snapshot.params['id'];
    if (!id) {
      this.router.navigateByUrl('/customer/list');
      return;
    }

    this.customerAPI
      .getCustomerById(id)
      .pipe(first())
      .subscribe(c => (this.customer = c));
  }
}
