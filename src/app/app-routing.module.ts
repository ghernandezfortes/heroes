import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesListComponent} from "./modules/heroes/pages/heroes-list/heroes-list.component";

const routes: Routes = [
  {
    //TODO: arreglar esto del lazing loading
    path: 'heroes',
    loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule),
  },
  {
    path: '**',
    redirectTo: '/heroes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
