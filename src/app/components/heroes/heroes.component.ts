import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  Hero  from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;
  id;
  addingHero = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        (heroes: Hero[]) => (this.heroes = heroes)
      )
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(id, event: any): void {
    event.stopPropagation();
    this.heroService.deleteHero(id).subscribe(res => {
      alert(res),
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(id, hero:Hero): void {
    this.id=id
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.id]);
  }
}
