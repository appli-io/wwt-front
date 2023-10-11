import { Component, Input }               from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'wwt-profile-header',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage ],
  templateUrl: './profile-header.component.html',
  styleUrls: [ './profile-header.component.scss' ]
})
export class ProfileHeaderComponent {
  @Input() userName: string = '';
  @Input() userRole: string = '';
  @Input() userAvatar: string = '';
}
