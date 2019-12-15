import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { addUser } from '../actions/user.actions';
import { User } from '../models/user';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> { }

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => adapter.addOne(user, state)),
);
