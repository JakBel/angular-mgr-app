import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './calculator.actions';

export interface CalculatorState {
  currentNumber: number;
  symbol: string;
  inputValue: string;
  resetSign: string;
  disabled?: boolean;
}

const initialState: CalculatorState = {
  currentNumber: 0,
  symbol: 'symbol',
  inputValue: '...',
  resetSign: 'AC',
  disabled: false,
};

export const calculatorReducer = createReducer(
  initialState,
  // Checking the digits
  on(CalculatorActions.digitClicked, (state, action) => {
    if (state.inputValue === '...') {
      return { ...state, inputValue: action.digit };
    } else if (state.inputValue === '0') {
      return { ...state, inputValue: action.digit };
    } else if (state.inputValue === '-0') {
      return { ...state, inputValue: '-' + action.digit };
    }
    return { ...state, inputValue: state.inputValue + action.digit };
  }),

  // Handle 0
  on(CalculatorActions.zeroClicked, (state) => {
    if (state.inputValue === '...') {
      return { ...state, inputValue: '0' };
    } else if (state.inputValue === '0') {
      return { ...state, inputValue: '0.0' };
    } else if (state.inputValue === '-0') {
      return { ...state, inputValue: '-0.0' };
    }
    return { ...state, inputValue: state.inputValue + '0' };
  }),

  // Check the symbol
  on(CalculatorActions.symbolClicked, (state, action) => ({
    ...state,
    symbol: action.symbol,
  })),

  // Check the '.'
  on(CalculatorActions.dotClicked, (state) => {
    if (state.inputValue === '...') {
      return { ...state, inputValue: '0.' };
    } else if (!state.inputValue.includes('.')) {
      return { ...state, inputValue: state.inputValue + '.' };
    }
    return state;
  }),

  // Changes the value to negative
  on(CalculatorActions.negateClicked, (state) => {
    if (state.inputValue === '...') {
      return { ...state, inputValue: '-0' };
    } else if (state.inputValue.includes('-')) {
      return { ...state, inputValue: state.inputValue.replace('-', '') };
    }
    return { ...state, inputValue: '-' + state.inputValue };
  }),

  // Reset the calculator
  on(CalculatorActions.resetClicked, (state) => {
    if (
      (state.resetSign === 'C' && state.inputValue === '0') ||
      state.inputValue === 'ERROR'
    ) {
      return {
        currentNumber: 0,
        symbol: 'symbol',
        inputValue: '...',
        resetSign: 'AC',
        disabled: false,
      };
    }
    if (state.resetSign === 'C') {
      return { ...state, symbol: 'symbol', inputValue: '0' };
    }
    return state;
  }),

  // Counting the answer
  on(CalculatorActions.equalsClicked, (state) => {
    if (state.inputValue === '...' || state.symbol === 'symbol') {
      return state;
    }
    switch (state.symbol) {
      case '+':
        return {
          ...state,
          currentNumber: state.currentNumber + parseFloat(state.inputValue),
        };
      case '-':
        return {
          ...state,
          currentNumber: state.currentNumber - parseFloat(state.inputValue),
        };
      case 'x':
        return {
          ...state,
          currentNumber: state.currentNumber * parseFloat(state.inputValue),
        };
      case '÷':
        if (
          Number.isNaN(state.currentNumber / parseFloat(state.inputValue)) ||
          state.currentNumber / parseFloat(state.inputValue) === Infinity ||
          state.currentNumber / parseFloat(state.inputValue) === -Infinity
        ) {
          return { ...state, inputValue: 'ERROR', disabled: true };
        }
        return {
          ...state,
          currentNumber: state.currentNumber / parseFloat(state.inputValue),
        };
    }
  }),

  // Reset button sign change
  on(CalculatorActions.changeResetSign, (state, actions) => ({
    ...state,
    resetSign: actions.newResetSign,
  }))
);
