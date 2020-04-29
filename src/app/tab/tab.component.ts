import { Component, OnInit, Input } from '@angular/core';
import { Tab } from "./tab.interface";
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  public isActive:boolean = false;

  @Input() title: string;

  constructor(
    public tabs: TabsComponent
  ) { }

  ngOnInit(): void {
    this.tabs.addTab(this)
  }

}
