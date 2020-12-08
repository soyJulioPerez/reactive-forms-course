import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CustomerI } from '../models/customer.interface';

@Component({
  selector: 'app-rf-customers',
  templateUrl: './rf-customers.component.html',
  styles: []
})
export class RfCustomersComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: true,
      addressType: 'Home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
    });
  }

  save() {
    const record = this.customerForm.value as CustomerI;
    console.log(this.customerForm);
    console.log(record);
  }
}
