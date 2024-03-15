import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { lastValueFrom } from 'rxjs';
import { HeroModel } from '../../models/hero.model';
import { HeroInterface } from '../../Interfaces/hero.interface';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],

})
export class HeroesListComponent implements OnInit {

  public heroesList: HeroModel[] = [];
  public heroesListFiltered: HeroModel[] = [];
  public loading: boolean = false;
  public heroName: string = '';
  private delayTimerEvent: any;
  public title = 'Listado de héroes';


  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSearch(name: any): void {

    clearTimeout(this.delayTimerEvent);
    this.setLoading(true)
    this.delayTimerEvent = setTimeout(() => {
      this.heroesListFiltered = this.heroesList.filter(hero => hero.name.toLowerCase().includes(name.toLowerCase()));
      this.setLoading(false);
    }, 500);
  }


  private getHeroes(): void {
    this.setLoading(true);
    lastValueFrom(this.heroesService.getHeroes())
      .then((data: HeroInterface[]) => {
        this.heroesList = data.map((hero: HeroInterface) => new HeroModel(hero.id, hero.name, hero.alias, hero.powers, hero.age));
        this.heroesListFiltered = [...this.heroesList];
      })
      .catch(e => console.log(e) )
      .finally(() => this.setLoading(false));
  }

  private setLoading(status: boolean): void {
    this.loading = status;
  }

}
