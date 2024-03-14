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
  public loading: boolean = false;


  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();

  }

  private getHeroes(): void {

    this.loading = true;

    lastValueFrom(this.heroesService.getHeroes())
      .then((data: HeroInterface[]) => {
        this.heroesList = data.map(p => new HeroModel(p))
      })
      .catch(e => {
        console.log(e);
      }).finally(() => {
        this.loading = false;
    });
  }


}
