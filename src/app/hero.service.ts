
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  uri = 'https://toh-back-api.herokuapp.com/hero';
  //uri = 'http://localhost:3000/hero';


  constructor(private http: HttpClient) { }

  addHero(hero) {
    this.http.post(`${this.uri}/add`, hero)
      .subscribe(res => console.log('Done'));
  }

  getHeroes() {
    return this.http.get(`${this.uri}`);
  }

  getHero(id) {
    return this.http.get(`${this.uri}/read/${id}`);
  }

  updateHero(hero) {
    this.http.post(`${this.uri}/update/${hero._id}`, hero)
      .subscribe(res => console.log('Done'));
  }

  deleteHero(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

  save(hero) {
    if (hero._id) {
      return this.http.post(`${this.uri}/update/${hero._id}`, hero);
    }
    return this.http.post(`${this.uri}/add`, hero);
  }

}

