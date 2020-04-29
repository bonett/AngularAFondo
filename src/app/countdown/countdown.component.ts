import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() init: number = null;
  public counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCountDown();
  }

  startCountDown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    console.log('count is', this.counter);

    if (this.counter == 0) {
      console.log('counted end');
    } else {
      this.doCountdown();
    }
  }
}
