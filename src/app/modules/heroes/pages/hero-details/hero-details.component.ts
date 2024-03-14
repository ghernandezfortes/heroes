import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroFormInterface } from '../../Interfaces/hero-form.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HeroInterface } from '../../Interfaces/hero.interface';
import { lastValueFrom } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit{


  public heroForm: FormGroup = this.buildFormGroup();
  public loading: boolean = false;
  public heroId: number = 0;
  public title: string = 'Crear héroe'


  get IsNewHero(): boolean {
    return this.heroId == 0;
  }


  constructor(private route: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setIsNewHero();
  }

  public onAddHero(): void {
    this.SetLoading(true);
    lastValueFrom(this.heroesService.addHero(this.heroForm.value))
      .then((response: HeroInterface | undefined) => {
        if (response !== undefined) {
          this.ShowMessage("Heroe creado correctamente", 2000);
          this.returnListHeroes();
        }

      })
      .catch(e => console.log(e) )
      .finally(() => this.SetLoading(false));
  }

  public onEditHero(): void {
    this.SetLoading(true);
    let editedHero = this.heroForm.value;
    editedHero.id = this.heroId;

    lastValueFrom(this.heroesService.editHero(this.heroForm.value))
      .then((response: HeroInterface | undefined) => {
        if (response !== undefined) {
          this.ShowMessage("Héroe editado correctamente", 2000);
          this.returnListHeroes();
        }

      })
      .catch(e => console.log(e) )
      .finally(() => this.SetLoading(false));
  }

  public onDeleteHero(): void {

    const dialogRef = this.CreateConfirmDialog();

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        lastValueFrom(this.heroesService.deleteHero(this.heroId))
          .then(response => {
            if (response !== undefined) {
              this.ShowMessage("Héroe borrado correctamente", 2000);
              this.returnListHeroes();
            }
          })
          .catch(e => console.log(e))
          .finally(() => this.SetLoading(false));
      }
    });
  }



  private CreateConfirmDialog(): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: 'Confirmación', message: '¿Está seguro de que deseas borrar el héroe?' }
    });
  }


  private setIsNewHero() {
    this.route.params.subscribe(params => {
      if(params['id'] !== 'new') {
        this.heroId = parseInt(params['id']);
        this.title = 'Detalle de héroe';
      }
      this.GetHeroData().then();
    });
  }

  private async GetHeroData(): Promise<void> {

    if (this.heroId === 0) {
      return
    }

    this.SetLoading(true);

    lastValueFrom(this.heroesService.getHero(this.heroId))
      .then((hero: HeroInterface | undefined) => {
        if (hero !== undefined) {
          this.SetHeroValues(hero);
        }
     })
      .catch(e => console.log(e) )
      .finally(() => this.SetLoading(false));


  }

  private SetHeroValues(hero: HeroInterface): void {
    this.heroForm = this.formBuilder.group({
      name: [hero.name.toUpperCase()],
      alias: [hero.alias],
      powers: [hero.powers],
      age: [hero.age],
    });
  }


  private buildFormGroup(): FormGroup<HeroFormInterface> {
    return new FormGroup<HeroFormInterface>({
      name: new FormControl<string | null >({ value: '', disabled: false }, [Validators.required]),
      alias: new FormControl<string | null >({ value: '', disabled: false }, [Validators.required]),
      powers: new FormControl<string | null>({ value: '', disabled: false }, [Validators.required]),
      age: new FormControl<number | null >({ value: 0, disabled: false }, [Validators.required]),
    });
  }

  private SetLoading(status: boolean): void {
    this.loading = status;
  }



  private returnListHeroes(): void {
    this.router.navigate(['/heroes']).then();
  }

  private ShowMessage(message: string, duration: number):void {
    this._snackBar.open(message, "", {duration});


  }

}
