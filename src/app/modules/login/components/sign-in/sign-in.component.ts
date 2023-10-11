import { Component }             from '@angular/core';
import { HttpResponse }          from '@angular/common/http';
import { FormsModule, NgForm }   from '@angular/forms';
import { MatCardModule }         from '@angular/material/card';
import { MatInputModule }        from '@angular/material/input';
import { MatButtonModule }       from '@angular/material/button';
import { AuthService }           from '../../../../auth.service';
import { Router }                from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ],
  imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  standalone: true
})
export class SignInComponent {

  constructor(private readonly authenticationService: AuthService, private readonly router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const {email, password} = form.value;
      this.authenticationService.signIn(email, password).subscribe({
        next: (response: HttpResponse<any>) => {
          this.router.navigate([ '/' ])
        },
        error: (error) => {
          console.log('Error while logging in user', error);
        },
        complete: () => {
          console.log('Completed login process');
        }
      });
    }
  }
}
