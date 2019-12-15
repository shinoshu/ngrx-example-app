import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromLayout from '../core/reducers/layout.reducer';

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
}

// https://github.com/ngrx/platform/blob/f17589feb2ef5ccd6544cca8d572c5911a57384c/projects/example-app/src/app/reducers/index.ts#L36
export const reducers: ActionReducerMap<State> = {
  [fromLayout.layoutFeatureKey]: fromLayout.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Layout Reducers
 */
export const selectLayoutState = createFeatureSelector<State, fromLayout.State>(
  'layout'
);

export const selecthowSidenav = createSelector(
  selectLayoutState,
  fromLayout.selectShowSidenav
);
