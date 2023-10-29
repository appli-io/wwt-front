import { createAction } from '@ngrx/store';

// Application Actions
export const toggleDarkMode = createAction('[App] Toggle Dark Mode', (darkMode: boolean) => ({darkMode}));
