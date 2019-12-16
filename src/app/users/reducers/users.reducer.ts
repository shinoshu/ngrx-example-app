import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { addUser, deleteUser, deleteUsers } from '../actions/user.actions';
import { User } from '../models/user';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> { }

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => adapter.addOne(user, state)),
  on(deleteUser, (state, { id }) => adapter.removeOne(id, state)),
  on(deleteUsers, (state, { ids }) => adapter.removeMany(ids, state)),
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectUserIds = selectIds;

export const selectUserEntities = selectEntities;

export const selectAllUsers = selectAll;

export const selectUserTotal = selectTotal;