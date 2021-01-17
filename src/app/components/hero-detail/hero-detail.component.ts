import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero
  heroe
  @Output() close = new EventEmitter()
  dataadded = false
  error
  navigated = false // true if navigated here

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.navigated = true
        this.heroService.getHero(params['id'])
          .subscribe(data => this.hero = data)
      } else {
        this.navigated = false
        this.hero = new Object
      }
    })
  }

  save() {
    this.route.params.forEach((params: Params) => {
      this.heroService.save(this.hero).subscribe(res => {
        alert(res),
          this.goBack(this.hero)
      })
    })
  }

  goBack(savedHero) {
    this.close.emit(savedHero)
    if (this.navigated) {
      window.history.back()
    }
  }
}