import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse }   from '@angular/common/http';
import { IItems } from '../models/items';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url: string = 'http://localhost:3000/items';
  constructor(private http: HttpClient) { 
  }

  getItems() {
    return this.http.get<IItems[]>(this.url);
  };

  getItem(id: number) {
    return this.http.get<IItems>(`${this.url}/${id}`);
  };

  postItem(item: IItems): Observable<IItems> {
    return this.http.post<IItems>(this.url, item).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
      })
    );
  };
};
