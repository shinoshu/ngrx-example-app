import { Action } from '@ngrx/store';
import * as fromUsers from '../reducers/users.reducer';
import * as fromRoot from "../../reducers";

export const usersFeatureKey = 'users';

export interface UsersState {
  [fromUsers.usersFeatureKey]: fromUsers.State;
}

export interface State extends fromRoot.State {
  [usersFeatureKey]: UsersState;
}
