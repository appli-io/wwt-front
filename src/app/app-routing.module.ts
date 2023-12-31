import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard }            from './commons/guards/auth.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'profile',
    canActivate: [ authGuard ],
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
