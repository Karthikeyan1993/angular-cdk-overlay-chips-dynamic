import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-micro-chip',
  templateUrl: './micro-chip.component.html',
  styleUrls: ['./micro-chip.component.css']
})
export class MicroChipComponent implements OnInit {
  @Input("item") item;
  @Output() close: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit() { }
  closeItem = () => {
    this.close.emit(this.item);
  };
}