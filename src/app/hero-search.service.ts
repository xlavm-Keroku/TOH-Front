import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroSearchService {
  constructor(private http: HttpClient) {}

  uri = 'https://toh-back-api.herokuapp.com/hero';
  //uri = 'http://localhost:3000/hero';

  searchHeroes(term): Observable<Object> {
    return this.http.get(`${this.uri}/search/${term}`);
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}