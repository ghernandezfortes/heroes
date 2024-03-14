import { Injectable } from '@angular/core';
import { delay, lastValueFrom, Observable, of } from 'rxjs';
import { HeroInterface } from '../Interfaces/hero.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  private heroes: HeroInterface[] = [
    {
      "id": 1,
      "name": "spiderman",
      "alias": "Hombre araña",
      "powers": "Fuerza, agilidad, tela-arañas",
      "age": 18
    },
    {
      "id": 2,
      "name": "hulk",
      "alias": "Hombre Verde",
      "powers": "Fuerza, agilidad, locura",
      "age": 18
    },
    {
      "id": 3,
      "name": "superman",
      "alias": "Hombre de acero",
      "powers": "Fuerza, agilidad, vista laser, volar",
      "age": 27
    }
  ];

  public getHeroes(): Observable<HeroInterface[]> {

    return of(this.heroes)
      .pipe(delay(1000));
  }

  public getHero(heroId: number): Observable<HeroInterface | undefined> {
    return of(this.heroes.find((hero: HeroInterface): boolean => hero.id === heroId))
      .pipe(delay(1000));
  }

  public addHero(newHero: HeroInterface): Observable<HeroInterface | undefined> {

    const newId: number = this.getNewId();
    this.heroes = [...this.heroes, {...newHero, id: newId}];

    return of(this.heroes.find((hero: HeroInterface): boolean => hero.id === newId))
      .pipe(delay(1000));
  }

  public deleteHero(heroId: number): Observable<boolean | undefined> {
    this.heroes = this.heroes.filter((hero: HeroInterface): boolean => hero.id !== heroId);
    return of(true)
      .pipe(delay(1000));
  }

  public editHero(editedHero: HeroInterface): Observable<HeroInterface | undefined> {
    this.heroes = this.heroes.map(hero => {
      if (hero.id === editedHero.id) {
        return editedHero;
      }
      return hero;
    });

    return of(editedHero).pipe(delay(1000));
  }

  private getNewId(): number {
    return Math.floor(Math.random() * (999999999 - 100000000 + 1) ) + 1000000;
  }


}
