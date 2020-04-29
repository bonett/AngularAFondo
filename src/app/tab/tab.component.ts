import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title: string;
  @Output() onclick: EventEmitter<void> = new EventEmitter<void>();

  public isActive: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  clickTabContent() {
    this.onclick.emit();
  }
}
