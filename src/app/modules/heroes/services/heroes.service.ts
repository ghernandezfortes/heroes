import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HeroInterface } from '../Interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private HttpClient: HttpClient) { }

  public getHeroes(): Observable<HeroInterface[]> {

    return  this.HttpClient.get<HeroInterface[]>('/assets/mocks/heroes.json').pipe(delay(1000));

  /*  return of([
      new HeroModel(),
      new HeroModel(),
      new HeroModel()
    ]).pipe(delay(1000));*/

  }
}
