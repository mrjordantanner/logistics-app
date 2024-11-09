import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UserService } from '../../core/services/user.service';
import * as UserActions from './user.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {
    // console.log('UserService:', userService);
    // console.log('actions$:', actions$);
  }

//   loadUsers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserActions.loadUsers),
//       mergeMap(() => 
//         this.userService.getAllUsers().pipe(
//           map(users => UserActions.loadUsersSuccess({ users })),
//           catchError(error => of(UserActions.loadUsersFailure({ error })))
//         )
//       )
//     )
//   );
}
