import { HeroInterface } from '../Interfaces/hero.interface';

export class HeroModel implements HeroInterface {
    id: number;
    name: string;
    alias: string;
    powers: string;
    age: number;

    constructor(heroInterface: HeroModel) {
      this.id = heroInterface.id;
      this.name = heroInterface.name;
      this.alias = heroInterface.alias;
      this.powers = heroInterface.powers;
      this.age = heroInterface.age;
    }



}
