
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  uri = 'https://toh-back-api.herokuapp.com/api/v1/hero';
  //uri = 'http://localhost:3000/hero';


  constructor(private http: HttpClient) { }

  addHero(hero) {
    this.http.post(`${this.uri}/`, hero)
      .subscribe(res => console.log('Done'));
  }

  getHeroes() {
    return this.http.get(`${this.uri}`);
  }

  getHero(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  updateHero(hero) {
    this.http.put(`${this.uri}/${hero._id}`, hero)
      .subscribe(res => console.log('Done'));
  }

  deleteHero(id) {
    return this.http.delete(`${this.uri}/${id}`);
  }

  save(hero) {
    if (hero._id) {
      return this.http.put(`${this.uri}/${hero._id}`, hero);
    }
    return this.http.post(`${this.uri}/`, hero);
  }

}