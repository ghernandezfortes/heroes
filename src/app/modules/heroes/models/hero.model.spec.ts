import { HeroModel } from './hero.model';
import { HeroFormInterface } from '../Interfaces/hero-form.interface';
import { FormControl } from '@angular/forms';

describe('HeroModel', () => {
  it('should create an instance', () => {
    const hero: HeroModel =  new HeroModel(0,'Thor', 'Dios del trueno', 'Rayos',213);

    expect(hero).toBeTruthy();
  });
});
