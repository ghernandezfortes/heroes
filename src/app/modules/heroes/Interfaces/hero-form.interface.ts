import { AbstractControl } from '@angular/forms';

export interface HeroFormInterface {
  id?: AbstractControl<number>;
  name?: AbstractControl<string | null>;
  alias?: AbstractControl<string | null>;
  powers?: AbstractControl<string | null>;
  age?: AbstractControl<number |null>;
}
