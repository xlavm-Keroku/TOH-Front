import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HeroSearchService {
  constructor(private http: HttpClient) {}

  uri = environment.URI_BACK  

  searchHeroe(term) {
    return this.http.get(`${this.uri}/search/${term}`)
  }


}