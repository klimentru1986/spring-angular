import { Injectable } from '@angular/core';
import { CustomerModule } from '../customer.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerApiService {
  private url = '/api/customer';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url, customer);
  }
  deleteCustomer(id: number): Observable<null> {
    return this.http.delete<null>(`${this.url}/${id}`);
  }
}
