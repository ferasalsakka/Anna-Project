import { Component } from '@angular/core';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  clientName: any;
  email: any;
  phone: any;
  address: any;
  submitForm() {
  throw new Error('Method not implemented.');
  }
}
