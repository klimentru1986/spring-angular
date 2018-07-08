import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from './services/customer-api.service';

@Component({
  selector: 'app-customer',
  template: '<router-outlet></router-outlet>'
})
export class CustomerComponent {

  constructor() { }

}
