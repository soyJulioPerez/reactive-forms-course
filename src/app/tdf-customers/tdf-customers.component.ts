import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerI } from '../models/customer.interface';

@Component({
  selector: 'app-tdf-customers',
  templateUrl: './tdf-customers.component.html',
  styles: []
})
export class TdfCustomersComponent implements OnInit {
  customer = {} as CustomerI;

  constructor() { }

  ngOnInit() {
    this.customer.addressType = 'home';
    this.customer.state = '';
  }

  save(customerForm: NgForm) {
    console.log('customerForm', customerForm);
    console.log('Values', customerForm.value);
  }
}
