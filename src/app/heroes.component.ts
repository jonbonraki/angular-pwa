import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
	selectedHero: Hero;

  constructor(private heroService: HeroService) { }
	
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // Get Heroes slowly to see how the app behaves. 
    // Do not use in production
    // this.heroService.getHeroesSlowly()
    
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

	onSelect(hero: Hero): void {
  	this.selectedHero = hero;
	}
}