import { Component, OnInit }              from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink }                     from '@angular/router';
import { initFlowbite }                   from 'flowbite';

@Component({
  selector: 'wwt-ghost-navbar',
  standalone: true,
  imports: [ CommonModule, RouterLink, NgOptimizedImage ],
  templateUrl: './ghost-navbar.component.html',
  styleUrls: [ './ghost-navbar.component.scss' ]
})
export class GhostNavbarComponent implements OnInit {
  ngOnInit() {
    initFlowbite();
  }
}
