import { Component, OnInit } from '@angular/core';
import { initFlowbite }      from 'flowbite';
import { AuthService }       from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'WWT_base';

  constructor(public readonly authService: AuthService) {
    if (this.authService.checkUsersToken()) {
      this.authService.getUserInfo(true).then();
    } else {
      this.authService.userSubject.next(null);
      // TODO: redirect to login page
    }
  }

  ngOnInit() {
    // initialize flowbite
    initFlowbite();
  }
}
