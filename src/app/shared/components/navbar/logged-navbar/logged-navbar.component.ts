import { Component, inject, OnInit }      from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink }     from '@angular/router';
import { MatButtonModule }                from '@angular/material/button';
import { MatDividerModule }               from '@angular/material/divider';
import { MatIconModule }                  from '@angular/material/icon';
import { MatMenuModule }                  from '@angular/material/menu';

import { initFlowbite } from 'flowbite';
import { take }         from 'rxjs';

import { IResponseUser }        from '../../../../modules/users/interfaces/response-user.interface';
import { AuthService }          from '../../../../auth.service';
import { BaseComponent }        from '../../base-component/base-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ApplicationFacade }    from '../../../store/app-state.facade';

@Component({
  selector: 'wwt-logged-navbar',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, RouterLink, MatButtonModule, MatMenuModule, MatIconModule, MatDividerModule, MatSlideToggleModule ],
  providers: [ ApplicationFacade ],
  templateUrl: './logged-navbar.component.html',
  styleUrls: [ './logged-navbar.component.scss' ]
})
export class LoggedNavbarComponent extends BaseComponent implements OnInit {
  private readonly appState = inject(ApplicationFacade);

  constructor(public authService: AuthService,
              public readonly router: ActivatedRoute) {
    super(router);
  }

  override ngOnInit() {
    this.authService.userSubject
      .pipe(take(1))
      .subscribe((user: IResponseUser | null) => {
        console.log(user);
        initFlowbite();
      });
  }

  toggleDarkMode() {
    this.appState.toggleDarkMode().then();
  }
}
