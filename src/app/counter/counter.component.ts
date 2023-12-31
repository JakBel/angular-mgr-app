import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnDestroy {
  constructor(private counterService: CounterService) {}

  number = 0;
  private countSubscribe: Subscription;

  ngOnInit(): void {
    this.countSubscribe = this.counterService.counter$.subscribe({
      next: (value) => {
        this.number = value;
      },
    });
  }

  increase() {
    this.counterService.increaseNumber();
  }

  decrease() {
    this.counterService.decreaseNumber();
  }

  reset() {
    this.counterService.resetNumber();
  }

  ngOnDestroy(): void {
    this.countSubscribe.unsubscribe();
  }
}
