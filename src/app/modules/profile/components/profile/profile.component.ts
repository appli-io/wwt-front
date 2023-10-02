import { Component }              from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ProfileInfoComponent }   from '../profile-info/profile-info.component';

@Component({
  selector: 'wwt-profile',
  standalone: true,
  imports: [ CommonModule, ProfileHeaderComponent, ProfileInfoComponent ],
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent {
  userName: string = 'John Doe';
  userRole: string = 'Software Engineer';
  userEmail: string = 'john.doe@example.com';
  userLocation: string = 'San Francisco, CA';
}
