import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent {

  constructor(private readonly authenticationService: AuthenticationService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const {email, password} = form.value;
      this.authenticationService.signIn(email, password).subscribe({
        next: (response: Response) => {
          console.log('User logged in successfully', response.body);
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
