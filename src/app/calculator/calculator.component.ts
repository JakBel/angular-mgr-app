import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  currentNumberSelector,
  disabledSelector,
  inputValueSelector,
  resetSelector,
  symbolSelector,
} from '../store/calculator/calculator.selectors';
import { AppStateInterface } from '../store/appState.interface';
import * as CalculatorActions from '../store/calculator/calculator.actions';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  numbers: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
  symbols: string[] = ['÷', 'x', '-', '+'];

  currentNumber$: Observable<number>;
  inputValue$: Observable<string>;
  symbol$: Observable<string>;
  resetSign$: Observable<string>;
  disabled$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    this.currentNumber$ = this.store.pipe(select(currentNumberSelector));
    this.inputValue$ = this.store.pipe(select(inputValueSelector));
    this.symbol$ = this.store.pipe(select(symbolSelector));
    this.resetSign$ = this.store.pipe(select(resetSelector));
    this.disabled$ = this.store.pipe(select(disabledSelector));
  }

  onDigitClick(num: string) {
    this.store.dispatch(CalculatorActions.digitClicked({ digit: num }));
  }

  onZeroClick() {
    this.store.dispatch(CalculatorActions.zeroClicked());
  }

  onSymbolClick(sym: string) {
    this.store.dispatch(CalculatorActions.symbolClicked({ symbol: sym }));
  }

  onDotClick() {
    this.store.dispatch(CalculatorActions.dotClicked());
  }

  onNegateClick() {
    this.store.dispatch(CalculatorActions.negateClicked());
  }

  onResetClick() {
    this.store.dispatch(CalculatorActions.resetClicked());
  }

  onEqualsClick() {
    this.store.dispatch(CalculatorActions.equalsClicked());
  }
}
