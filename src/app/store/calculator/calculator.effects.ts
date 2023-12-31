import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CalculatorActions from './calculator.actions';
import { map } from 'rxjs';

@Injectable()
export class CalculatorEffects {
  resetChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalculatorActions.digitClicked),
      map(() => CalculatorActions.changeResetSign({ newResetSign: 'C' }))
    )
  );

  constructor(private actions$: Actions) {}
}
