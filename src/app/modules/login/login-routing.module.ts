import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('./components/sign-in/sign-in.component').then(component => component.SignInComponent),
    data: {title: 'Sign In'}
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./components/sign-up/sign-up.component').then(component => component.SignUpComponent),
    data: {title: 'Sign Up'}
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
