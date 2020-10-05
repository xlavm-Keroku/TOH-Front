
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Hero from './hero_model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  uri = 'https://angular-tourofhero-backapi.herokuapp.com/hero';


  constructor(private http: HttpClient) { }

  addHero(name) {
    const obj = {

      name: name

    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getHero() {
    return this.http.get(`${this.uri}`);
  }

  editHero(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateHero(name, id) {
    const obj = {

      name: name

    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteHero(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

  save(id,hero: Hero) {
    if (id) {
      const obj = {
        name: hero.name
      };
      return this.http.post(`${this.uri}/update/${id}`, obj);
    }
    const obj = {
      name: hero.name
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
  }

}

