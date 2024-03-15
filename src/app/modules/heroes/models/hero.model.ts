import { HeroInterface } from '../Interfaces/hero.interface';

export class HeroModel implements HeroInterface {
    id: number;
    name: string;
    alias: string;
    powers: string;
    age: number;

    constructor(id: number, name: string, alias: string, powers: string, age: number) {
      this.id = id;
      this.name = name;
      this.alias = alias;
      this.powers = powers;
      this.age = age;
    }



}
