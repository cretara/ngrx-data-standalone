import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {COUNTER_INITAL_VALUE} from "../../model/counter";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public counter = signal(0);

  counterAugment() {
    this.counter.set(this.counter() + 1);
  }

  counterDecrement() {
    this.counter.set(this.counter() - 1);
  }

  counterReset() {
    this.counter.set(COUNTER_INITAL_VALUE);
  }
}
