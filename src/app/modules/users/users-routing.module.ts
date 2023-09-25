import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/users-list/users-list.component').then(c => c.UsersListComponent),
    data: {title: 'Users list'}
  },
  {
    path: ':id',
    loadComponent: () => import('./components/users-detail/users-detail.component').then(c => c.UsersDetailComponent),
    data: {title: 'User detail'}
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule {}
