import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Hero from './hero_model';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  heroe: any = {};
  @Output() close = new EventEmitter();
  dataadded = false;
  msg: String ;
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.navigated = true;
        this.heroService.editHero(params['id'])
          .subscribe((data: Hero) => {
            this.hero = data;
          });
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  save(): void {
    this.route.params.forEach((params: Params) => {
    this.heroService.save(params['id'], this.hero).subscribe(hero => {
      this.heroe = hero; // saved hero, w/ id if new
      this.goBack(hero);
    }, error => (this.error = error)); // TODO: Display error message
  });
  }

  goBack(savedHero: any = {} = null): void {
    this.close.emit(savedHero);
    if (this.navigated) {
      window.history.back();
    }
  }
}
