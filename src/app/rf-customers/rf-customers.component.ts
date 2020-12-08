import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CustomerI, emptyCustomer } from '../models/customer.interface';

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

  clearForm() {
    this.customerForm.setValue(emptyCustomer);
  }

  initForm() {
    this.clearForm();
    this.customerForm.markAsPristine();
    this.customerForm.markAsUntouched();
  }

  setMockData() {
    const mockCustomer = {
      firstName: 'Larry',
      lastName: 'Jimenez',
      email: 'larry.jimenez@mail.com',
      sendCatalog: true,
      addressType: 'Work',
      street1: 'Av Reconquista 850',
      street2: 'Cerca de Retiro',
      city: 'CABA',
      state: 'Buenos Aires',
      zip: '1064',
    };
    this.customerForm.setValue(mockCustomer);
  }

  patchMockData() {
    this.customerForm.patchValue({
      firstName: 'Florencio',
      lastName: 'Arriechi'
    });
  }

  save() {
    const record = this.customerForm.value as CustomerI;
    console.log(this.customerForm);
    console.log(record);
  }
}
