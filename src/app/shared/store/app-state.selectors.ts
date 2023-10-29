import { createFeatureSelector, createSelector }   from '@ngrx/store';
import { applicationFeatureKey, ApplicationState } from './app-state.reducer';

export const appState = createFeatureSelector<ApplicationState>(applicationFeatureKey);

export const darkMode = createSelector(appState, state => state.darkMode);
