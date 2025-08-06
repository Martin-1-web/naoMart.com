import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Email } from './email';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  private http = inject(HttpClient);
  private url: string = '';

  sendNewsLetterMail(email: Email) {
    return this.http.post(this.url, email).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message || 'Server Error');
  }
}
