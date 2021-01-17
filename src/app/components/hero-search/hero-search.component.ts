import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroSearchService } from '../../services/hero-search.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  search(term) {
    this.heroes = this.heroSearchService.searchHeroe(term)
    .subscribe(heroe => this.heroes = heroe)
  }

  ngOnInit() {

  }

  gotoDetail(hero) {
    const link = ['/detail', hero._id];
    this.router.navigate(link);
  }
}