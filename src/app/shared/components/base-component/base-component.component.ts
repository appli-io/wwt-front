import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject }                      from 'rxjs';
import { ActivatedRoute }               from '@angular/router';

@Component({
  template: `
    <ng-content></ng-content>`
})
export class BaseComponent implements OnInit, OnDestroy {
  title: string = '';
  private readonly onDestroy = new Subject<void>();

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
