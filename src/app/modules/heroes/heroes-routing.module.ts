import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesListComponent} from "./pages/heroes-list/heroes-list.component";
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';


const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent
  },
  {
    path: ':id',
    component: HeroDetailsComponent
  },
  {
    path: 'new',
    component: HeroDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
