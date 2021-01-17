import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes
  selectedHero
  id
  addingHero = false
  error
  showNgFor = false

  constructor(private router: Router, private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  addHero() {
    this.addingHero = true
    this.selectedHero = null
  }

  close(savedHero) {
    this.addingHero = false
    if (savedHero) {
      this.getHeroes()
    }
  }

  deleteHero(id, event) {
    event.stopPropagation()
    this.heroService.deleteHero(id)
      .subscribe(res => (
        alert(res),
        this.ngOnInit()
      ))
  }

  ngOnInit() {
    this.getHeroes()
  }

  onSelect(id, hero) {
    this.id = id
    this.selectedHero = hero
    this.addingHero = false
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.id])
  }
}