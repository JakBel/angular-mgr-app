import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private _counter = new BehaviorSubject<number>(0);
  counter$: Observable<number> = this._counter.asObservable();

  increaseNumber() {
    this._counter.next(this._counter.value + 1);
  }

  decreaseNumber() {
    this._counter.next(this._counter.value - 1);
  }

  resetNumber() {
    this._counter.next(0);
  }
}
