import { Component, OnInit }              from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink }     from '@angular/router';
import { MatButtonModule }                from '@angular/material/button';

import { initFlowbite } from 'flowbite';

import { IResponseUser } from '../../../../modules/users/interfaces/response-user.interface';
import { AuthService }   from '../../../../auth.service';
import { BaseComponent } from '../../base-component/base-component.component';

@Component({
  selector: 'wwt-logged-navbar',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, RouterLink, MatButtonModule ],
  templateUrl: './logged-navbar.component.html',
  styleUrls: [ './logged-navbar.component.scss' ]
})
export class LoggedNavbarComponent extends BaseComponent implements OnInit {

  constructor(public authService: AuthService,
              public readonly router: ActivatedRoute) {
    super(router);
  }

  override ngOnInit() {
    this.authService.userSubject
      .pipe()
      .subscribe((user: IResponseUser | null) => {
        console.log(user);
        initFlowbite();
      });
  }
}
