import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterComponent} from './counter.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {COUNTER_INITAL_VALUE} from "../../model/counter";

describe('CounterComponent', () => {
  let counterComponent: CounterComponent;
  let counterComponentFixture: ComponentFixture<CounterComponent>;
  let counterComponentDebugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterComponent]
    });
    counterComponentFixture = TestBed.createComponent(CounterComponent);
    counterComponent = counterComponentFixture.componentInstance;
    counterComponentFixture.detectChanges();
    counterComponentDebugElement = counterComponentFixture.debugElement;
  });

  it('should create CounterComponent', () => {
    expect(counterComponent)
      .withContext("CounterComponent not created")
      .toBeTruthy();
  });

  it('should increment counter by one', () => {
    const COUNTER_INITIAL_VALUE = 0;
    counterComponent.counter.set(COUNTER_INITIAL_VALUE);
    const augmentButton = counterComponentDebugElement.query(By.css('#counter-augment'));
    augmentButton.nativeElement.click();
    counterComponentFixture.detectChanges();
    expect(counterComponent.counter()).toBe(COUNTER_INITIAL_VALUE + 1);
  });

  it('should decrement counter by one', () => {
    const COUNTER_INITIAL_VALUE = 1;
    counterComponent.counter.set(COUNTER_INITIAL_VALUE);
    const augmentButton = counterComponentDebugElement.query(By.css('#counter-decrement'));
    augmentButton.nativeElement.click();
    counterComponentFixture.detectChanges();
    expect(counterComponent.counter()).toBe(COUNTER_INITIAL_VALUE - 1);
  });

  it('should reset counter value to zero', () => {
    const COUNTER_VALUE_DIFFERENT_FROM_INITIAL = 1;
    counterComponent.counter.set(COUNTER_VALUE_DIFFERENT_FROM_INITIAL);
    const augmentButton = counterComponentDebugElement.query(By.css('#counter-reset'));
    augmentButton.nativeElement.click();
    counterComponentFixture.detectChanges();
    expect(counterComponent.counter()).toBe(COUNTER_INITAL_VALUE);
  });
});
