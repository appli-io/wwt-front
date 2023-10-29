import { Component, Input }               from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule }                from '@angular/material/button';
import { IResponseUser }                  from '../../../users/interfaces/response-user.interface';

@Component({
  selector: 'wwt-profile-header',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, MatButtonModule ],
  templateUrl: './profile-header.component.html',
  styleUrls: [ './profile-header.component.scss' ]
})
export class ProfileHeaderComponent {
  @Input() public user: IResponseUser | null;
}
