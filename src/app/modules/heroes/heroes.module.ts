import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';




@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailsComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HeroesModule { }
