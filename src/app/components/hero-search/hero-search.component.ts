import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  Hero  from '../../models/hero.model';
import { HeroSearchService } from '../../services/hero-search.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes: any

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    this.heroes = this.heroSearchService.searchHeroe(term)
  }

  ngOnInit(): void {

  }

  gotoDetail(hero): void {
    const link = ['/detail', hero._id];
    this.router.navigate(link);
  }
}