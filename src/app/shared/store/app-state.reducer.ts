import { createReducer, on } from '@ngrx/store';
import { toggleDarkMode }    from './app-state.actions';

export const applicationFeatureKey = 'appState';

export interface ApplicationState {
  darkMode: boolean;
  loading: boolean;
  error: any;
  user: any;
}

const initialState: ApplicationState = {
  darkMode: false,
  loading: false,
  error: null,
  user: null
};

const onToggleDarkMode = (state: ApplicationState, {darkMode}: { darkMode: boolean }): ApplicationState => {
  return {
    ...state,
    darkMode
  };
};

const onLoading = (state: ApplicationState, {loading}: { loading: boolean }): ApplicationState => {
  return {
    ...state,
    loading
  };
};

const onError = (state: ApplicationState, {error}: { error: string }): ApplicationState => {
  return {
    ...state,
    error
  };
};

export const applicationReducer = createReducer(
  initialState,
  on(toggleDarkMode, onToggleDarkMode)
);

// export function applicationReducer(state: ApplicationState | undefined, action: Action): ApplicationState {
//   return reducer(state, action);
// }
