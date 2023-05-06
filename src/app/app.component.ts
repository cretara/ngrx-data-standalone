import {Component, signal} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class AppComponent {
  public counter = signal(0);

  counterAugment() {
    this.counter.set(this.counter() + 1);
  }

  counterDecrement() {
    this.counter.set(this.counter() - 1);
  }
}
