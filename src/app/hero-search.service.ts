import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import  Hero  from './hero_model';

@Injectable()
export class HeroSearchService {
  constructor(private http: HttpClient) {}

  uri = 'https://angular-tourofhero-backapi.herokuapp.com/hero';

  search(term: string): Observable<Hero[]> {

    return this.http.get<Hero[]>(`${this.uri}/edit/${term}`);
    //return this.http
     // .get<Hero[]>(`app/heroes/?name=${term}`)
      //.pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
