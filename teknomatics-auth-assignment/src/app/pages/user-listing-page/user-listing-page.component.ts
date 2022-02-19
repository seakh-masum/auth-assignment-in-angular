import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models';
import { AuthService, CustomerService } from 'src/app/services';

@Component({
  selector: 'app-user-listing-page',
  templateUrl: './user-listing-page.component.html',
  styleUrls: ['./user-listing-page.component.scss'],
})
export class UserListingPageComponent implements OnInit {
  isTableVisible = false;
  displayedColumns: string[] = [];
  customerData: Customer[] = [];

  constructor(
    private _customerService: CustomerService,
    public _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getTableData();
  }

  // Get the table data
  getTableData() {
    this.customerData = this._customerService.getCustomerData();
    this.displayedColumns = [
      'customerName',
      'projectName',
      'globalMaster',
      'indicator',
      'technicalPerson',
      'forecastGenarated',
      'action',
    ];
  }
  // on change the select option
  onSelect(value: string) {
    this.isTableVisible = value == '2' ? true : false;
  }
}
