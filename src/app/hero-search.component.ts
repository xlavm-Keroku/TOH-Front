import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import  Hero  from './hero_model';
import { HeroSearchService } from './hero-search.service';

@Component({
  selector: 'my-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Object>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
              this.heroSearchService.searchHeroes(term)
            : // or the observable of empty heroes if no search term
              of<Object>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Hero[]>([]);
      })
    );
  }

  gotoDetail(hero): void {
    const link = ['/detail', hero._id];
    this.router.navigate(link);
  }
}