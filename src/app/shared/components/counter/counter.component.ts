import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  value = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
