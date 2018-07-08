import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  constructor(private customerAPI: CustomerApiService) {}

  ngOnInit() {
    this.customerAPI
      .getCustomvers()
      .pipe(first())
      .subscribe(c => console.log(c));
  }
}
