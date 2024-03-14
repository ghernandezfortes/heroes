import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';





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
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    SharedModule

  ],
})
export class HeroesModule { }
