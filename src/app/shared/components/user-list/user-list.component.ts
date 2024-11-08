import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { selectUsers, selectLoggedInUser } from '../../../state/user/user.selector';
import * as UserActions from '../../../state/user/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  loggedInUser$: Observable<User | null>;

  // Define columns to be displayed in the Material table
  displayedColumns: string[] = ['name', 'id', 'role'];

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
    this.loggedInUser$ = this.store.select(selectLoggedInUser);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }
}
