import { createReducer, on } from '@ngrx/store';
import { UserState, initialUserState } from './user.state';
import * as UserActions from './user.actions';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.setLoggedInUser, (state, { user }) => ({ ...state, loggedInUser: user })),
  on(UserActions.clearLoggedInUser, state => ({ ...state, loggedInUser: null }))
);
