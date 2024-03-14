import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';
import { HeroInterface } from '../Interfaces/hero.interface';
import { HeroModel } from '../models/hero.model';
import { HeroFormInterface } from '../Interfaces/hero-form.interface';
import { FormControl } from '@angular/forms';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add Hero', () => {

    const heroForm: HeroFormInterface = {
      id: new FormControl(0),
      name: new FormControl('Thor'),
      alias: new FormControl('Dios del trueno'),
      powers: new FormControl('Rayos'),
      age: new FormControl(213)
    };




  });


});
