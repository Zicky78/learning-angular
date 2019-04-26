import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component implements OnInit {
  display = false;
  clicks = [];
  click = 0;
  constructor() {}

  ngOnInit() {}

  toggleDisplay() {
    if (this.display === false) {
      this.display = true;
    } else {
      this.display = false;
    }
    this.clicks.push(new Date());
  }
}
