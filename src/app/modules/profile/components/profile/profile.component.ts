import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';

import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ProfileInfoComponent }   from '../profile-info/profile-info.component';
import { AuthService }            from '../../../../auth.service';
import { IResponseUser }          from '../../../users/interfaces/response-user.interface';

@Component({
  selector: 'wwt-profile',
  standalone: true,
  imports: [ CommonModule, ProfileHeaderComponent, ProfileInfoComponent ],
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent implements OnInit {
  public user: IResponseUser | null = null;

  constructor(readonly authService: AuthService) {}

  ngOnInit() {
    this.authService.userSubject.subscribe(user => this.user = user);
  }
}
