import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';

@Component({
  selector: 'wwt-profile-info',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './profile-info.component.html',
  styleUrls: [ './profile-info.component.scss' ]
})
export class ProfileInfoComponent {
  @Input() userEmail: string = '';
  @Input() userLocation: string = '';
}
