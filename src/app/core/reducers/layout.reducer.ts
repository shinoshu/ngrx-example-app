import { createReducer } from '@ngrx/store';


export const layoutFeatureKey = 'layout';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false,
};

export const reducer = createReducer(
  initialState,
);
