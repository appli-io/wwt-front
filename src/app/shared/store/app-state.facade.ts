import { inject, Injectable }  from '@angular/core';
import { Store }               from '@ngrx/store';
import { toggleDarkMode }      from './app-state.actions';
import { darkMode }            from './app-state.selectors';
import { lastValueFrom, take } from 'rxjs';
import { ApplicationState }    from './app-state.reducer';

@Injectable({providedIn: 'root'})
export class ApplicationFacade {
  private readonly store: Store = inject(Store<ApplicationState>);

  public darkMode$ = this.store.select(darkMode).pipe(take(1));

  async toggleDarkMode() {
    const darkModeState = await lastValueFrom(this.darkMode$);

    if (darkModeState) document.body.classList.remove('dark');
    else document.body.classList.add('dark');

    this.store.dispatch(toggleDarkMode(!darkModeState));
  }
}
