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

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    // initialize flowbite
    initFlowbite();
    console.log(this.checkIfUserCookieExists());
  }

  checkIfUserCookieExists() {
    return this.authService.checkIfUserCookieExists();
  }
}
