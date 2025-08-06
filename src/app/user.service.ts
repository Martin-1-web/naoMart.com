import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)

  private url: string = 'http://localhost:8080/user'

  sendData(user: User) {
    return this.http.post(this.url, user).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse):Observable<never> {
    return throwError(() => error.message || 'Server Error');
  }
}
