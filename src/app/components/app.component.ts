import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PostListComponent} from "./post-list/post-list.component";
import {CounterComponent} from "./counter/counter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, PostListComponent, CounterComponent]
})
export class AppComponent {
  
}
