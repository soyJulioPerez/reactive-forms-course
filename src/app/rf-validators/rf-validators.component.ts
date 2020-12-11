import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomerI, emptyCustomer } from './models/customer.interface';
import { rangeValidator } from './validators/range.validator';

@Component({
  selector: 'app-rf-validators',
  templateUrl: './rf-validators.component.html',
  styles: []
})
export class RfValidatorsComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'Email',
      rating: [null, rangeValidator(1, 5)],
      sendCatalog: false,
      addressType: 'Home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
    });
  }

  clearForm() {
    this.setNotification('Email');
    this.customerForm.setValue(emptyCustomer);
  }

  initForm() {
    this.clearForm();
    this.customerForm.markAsPristine();
    this.customerForm.markAsUntouched();
  }

  setMockData() {
    const mockCustomer: CustomerI = {
      firstName: 'Larry',
      lastName: 'Jimenez',
      email: 'larry.jimenez@mail.com',
      phone: '32681231',
      notification: 'Text',
      rating: 5,
      sendCatalog: true,
      addressType: 'Work',
      street1: 'Av Reconquista 850',
      street2: 'Cerca de Retiro',
      city: 'CABA',
      state: 'CA',
      zip: '1064',
    };
    this.setNotification('Text');
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

  setNotification(notifyBy: 'Email' | 'Text') {
    const phoneControl = this.customerForm.get('phone');
    if (notifyBy === 'Text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

}
