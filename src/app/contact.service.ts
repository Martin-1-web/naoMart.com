import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserContact } from './user-contact';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient)
  private url: string = 'https://1angularhttpclient-5d604-default-rtdb.firebaseio.com/contact.json'

  public sendContactData(userContact: UserContact) {

    return this.http.post(this.url, userContact).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error.message || 'Server Error');
  }
}
