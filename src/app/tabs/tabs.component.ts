import { Component, OnInit, AfterContentInit, OnDestroy, ContentChildren, QueryList, Query } from '@angular/core';
import { Tab } from '../tab/tab.interface';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy{

  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

  private tabClickSubscriptions: any[] =  [];

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy() {
    if(this.tabClickSubscriptions) {
      this.tabClickSubscriptions.forEach(
        item => item.unsubscribe()
      );
    }
  }

  ngAfterContentInit() {
    this.tabs.forEach(tab => {
      let subscription = tab.onclick.subscribe(() => {
        console.log(`tab ${tab.title} content clicked`);
      });
      this.tabClickSubscriptions.push(subscription);
    });
    this.selectTab(this.tabs.first);
  }

  selectTab(tab: Tab) {
    this.tabs.forEach(tab => tab.isActive = false );
    tab.isActive = true;
  }
}
