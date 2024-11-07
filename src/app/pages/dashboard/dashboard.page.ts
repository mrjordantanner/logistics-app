import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})

export class DashboardPage {
  numberOfItems = 16;
  items: number[] = [];

  constructor() {
    this.items = [];
    for (let i = 0; i < 16; i++) {
      this.items.push(i);
    }
  }
}
