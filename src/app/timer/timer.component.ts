import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() init: number = 20;
  @Output() onComplete = new EventEmitter<void>();

  constructor(
    public timer: TimerService
  ) { }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);
  }

  ngOnDestroy() {
    this.timer.destroy();
  }
}