import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../appState.interface';
import { CalculatorState } from './calculator.reducer';

export const selectFeatures = (state: AppStateInterface) => state.calculator;

export const currentNumberSelector = createSelector(
  selectFeatures,
  (state: CalculatorState) => state.currentNumber
);

export const inputValueSelector = createSelector(
  selectFeatures,
  (state: CalculatorState) => state.inputValue
);

export const symbolSelector = createSelector(
  selectFeatures,
  (state: CalculatorState) => state.symbol
);

export const resetSelector = createSelector(
  selectFeatures,
  (state: CalculatorState) => state.resetSign
);

export const disabledSelector = createSelector(
  selectFeatures,
  (state: CalculatorState) => state.disabled
);
