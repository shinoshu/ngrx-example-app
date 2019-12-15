import { createAction, props } from '@ngrx/store';

import { User } from '../models/user';

export const addUser = createAction('[User/API] Add User', props<{ user: User }>());