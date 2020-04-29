import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAddTimerVisible: boolean = false;
  public time: number = 0;

  constructor() { }

  logCountdownEnd() {
    console.log("countdown has finished");
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
  }

  public hiddenAddTimer() {
    this.isAddTimerVisible = false;
  }
}