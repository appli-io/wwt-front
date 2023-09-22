import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { FormsModule }        from '@angular/forms';
import { MatCardModule }      from '@angular/material/card';
import { MatInputModule }     from '@angular/material/input';
import { MatButtonModule }    from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule { }
