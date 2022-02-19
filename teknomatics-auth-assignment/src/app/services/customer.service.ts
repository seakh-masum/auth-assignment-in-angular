import { Injectable } from '@angular/core';
import { CustomerList } from '../data/customer.data';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  // get the customer data
  getCustomerData() {
    return CustomerList;
  }
}
