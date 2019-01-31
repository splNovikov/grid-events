import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        tap(this.handleEventInterception),
        catchError(this.handleErrorResponse)
      );
  }

  private handleEventInterception = (ev: HttpEvent<any>) => {
    // just in case if we need
  }

  private handleErrorResponse = (response: HttpErrorResponse) => {
    this._snackBar.open(response.message, 'Close', {
      duration: 2000,
    });

    return throwError(response);
  }

}
