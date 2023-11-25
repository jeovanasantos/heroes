import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from './mocks/Hero.mocks';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = []
  selectedHero?: Hero;

  constructor(private heroService: HeroService){}

  onSelectHero(hero: Hero){
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
}

