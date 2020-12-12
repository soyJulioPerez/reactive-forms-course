import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { CustomerI, emptyCustomer } from './models/customer.interface';
import { compareValidator } from './validators/compare.validator';
import { rangeValidator } from './validators/range.validator';

@Component({
  selector: 'app-rf-changes',
  templateUrl: './rf-changes.component.html',
  styles: []
})
export class RfChangesComponent implements OnInit {
  customerForm: FormGroup;
  emailMessage: string;
  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, {validator: compareValidator('email', 'confirmEmail')}),
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

    this.customerForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    )
    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.subscribe(
      value => this.setMessage(emailControl)
    );
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
      emailGroup: {
        email: 'larry.jimenez@mail.com',
        confirmEmail: 'larry.jimenez@mail.com',
      },
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

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
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
