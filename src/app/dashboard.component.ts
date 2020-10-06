import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  Hero  from './hero_model';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:  any;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  gotoDetail(id): void {
    const link = ['/detail', id];
    this.router.navigate(link);
  }
}
