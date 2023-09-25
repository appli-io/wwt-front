import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { MatButtonModule }    from '@angular/material/button';
import { MatCardModule }      from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    FormsModule,
    // Material modules
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule {}
