import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    data: { title: 'Sign In' }
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: { title: 'Sign Up' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
