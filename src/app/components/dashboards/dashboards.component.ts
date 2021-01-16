import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  
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