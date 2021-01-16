import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroSearchService {
  constructor(private http: HttpClient) {}

  uri = 'https://toh-back-api.herokuapp.com/api/v1/hero';
  //uri = 'http://localhost:3000/hero';

  searchHeroe(term) {
    return this.http.get(`${this.uri}/search/${term}`);
  }

}