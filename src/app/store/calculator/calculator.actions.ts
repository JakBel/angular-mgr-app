import { createAction, props } from '@ngrx/store';

export const digitClicked = createAction(
  '[Calculator] Digit clicked',
  props<{ digit: string }>()
);

export const symbolClicked = createAction(
  '[Calculator] Symbol clicked',
  props<{ symbol: string }>()
);

export const zeroClicked = createAction('[Calculator] Zero clicked');

export const dotClicked = createAction('[Calculator] Dot clicked');

export const negateClicked = createAction('[Calculator] Negate clicked');

export const resetClicked = createAction('[Calculator] Reset clicked');

export const equalsClicked = createAction('[Calculator] Equals clicked');

export const changeResetSign = createAction(
  '[Calculator] Change reset sign',
  props<{ newResetSign: string }>()
);
