import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../core/services/user.service';
import * as UserActions from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

export const loadUsers$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) =>
    actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        userService.getAllUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    ),
  { functional: true }
);



// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { UserService } from '../../core/services/user.service';
// import * as UserActions from './user.actions';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Injectable()
// export class UserEffects {
//   loadUsers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserActions.loadUsers),
//       mergeMap(() =>
//         this.userService.getAllUsers().pipe(
//           map(users => UserActions.loadUsersSuccess({ users })),
//           catchError((error) => of(UserActions.loadUsersFailure({ error })))
//         )
//       )
//     )
//   );

//   constructor(
//     private actions$: Actions, 
//     private userService: UserService) {

//     console.log('Actions:', this.actions$);
//     console.log('UserService:', this.userService);
//   }
// }
