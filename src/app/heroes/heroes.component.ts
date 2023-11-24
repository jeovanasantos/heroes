import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from './mocks/Hero.mocks';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES 
  selectedHero?: Hero;

  onSelectHero(hero: Hero){
    this.selectedHero = hero;
  }

}

