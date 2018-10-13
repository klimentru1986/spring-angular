import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { first } from 'rxjs/operators';
import { CustomerDataService } from 'src/app/store/customer-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerData: CustomerDataService
  ) {}

  ngOnInit() {
    this.getCustomerById();
  }

  onSubmit(customer: Customer): void {
    this.customerData
      .update(customer)
      .pipe(first())
      .subscribe(c => this.router.navigateByUrl('/customer/list'));
  }

  private getCustomerById(): void {
    const id: number = +this.route.snapshot.params['id'];

    if (!id) {
      this.router.navigateByUrl('/customer/list');
      return;
    }

    this.customer$ = this.customerData.getByKey(id);
  }
}
