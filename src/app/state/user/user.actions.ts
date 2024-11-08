import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const setLoggedInUser = createAction('[User] Set Logged In User', props<{ user: User }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());
export const clearLoggedInUser = createAction('[User] Clear Logged In User');
