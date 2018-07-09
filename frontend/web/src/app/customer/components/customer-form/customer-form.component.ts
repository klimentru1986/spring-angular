import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Input() customer: Customer;
  @Output() submitEv: EventEmitter<Customer> = new EventEmitter();
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.initForm();
    if (this.customer) {
      this.customerForm.patchValue(this.customer);
    }
  }

  onSubmit(): void {
    if (this.customerForm.invalid) {
      Object.values(this.customerForm.controls).forEach(c => c.markAsTouched());
      return;
    }

    this.submitEv.emit(this.customerForm.value);
  }

  private initForm(): FormGroup {
    return this.fb.group({
      id: [null],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]]
    });
  }
}
