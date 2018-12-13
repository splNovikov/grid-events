import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { UserService } from '../user.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserService,
              private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._userService.user.pipe(
      map(user => user.role.canCreateNews),
      catchError(() => {
        // todo: use constants"
        this._router.navigate(['/feed']);

        return of(false);
      }));
  }
}
