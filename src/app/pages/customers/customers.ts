import { Component } from '@angular/core';
import { CUSTOMER_GROUPS, CustomerGroup } from './customers.data';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  protected readonly groups: CustomerGroup[] = CUSTOMER_GROUPS;
}