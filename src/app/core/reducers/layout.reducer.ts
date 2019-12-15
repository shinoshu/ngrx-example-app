import { createReducer, on } from '@ngrx/store';

import { LayoutActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false,
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.closeSidenav, state => ({ showSidenav: false })),
  on(LayoutActions.openSidenav, state => ({ showSidenav: true })),
  // on(AuthActions.logoutConfirmation, state => ({ showSidenav: false }))
);

export const selectShowSidenav = (state: State) => state.showSidenav;