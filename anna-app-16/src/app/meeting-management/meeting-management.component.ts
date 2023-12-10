import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting-management',
  templateUrl: './meeting-management.component.html',
  styleUrls: ['./meeting-management.component.css']
})
export class MeetingManagementComponent {
  selectedClient: any;
  meetingAgenda: any;
  meetingTime: any;
  meetingDate: any;
  scheduleMeeting() {
  throw new Error('Method not implemented.');
  }
}
