import { Component, OnInit } from '@angular/core';
import { initFlowbite }      from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  title = 'WWT_base';

  ngOnInit() {
    // initialize flowbite
    initFlowbite();
  }
}
