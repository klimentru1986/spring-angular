import { Injectable } from '@angular/core';
import { CustomerModule } from '../customer.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerApiService {
  constructor(private http: HttpClient) {}

  getCustomvers(): Observable<Customer> {
    const url = '/api/customer';

    return this.http.get<Customer>(url);
  }
}
