import { User } from '../../shared/models/user.model';

export interface UserState {
  users: User[];
  loggedInUser: User | null;
}

export const initialUserState: UserState = {
  users: [],
  loggedInUser: null
};
