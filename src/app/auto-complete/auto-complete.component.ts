import { Component, OnInit, Input,EventEmitter, Output } from "@angular/core";
import { AutoCompletePopupDirective } from '../auto-complete-popup.directive';
@Component({
  selector: "app-auto-complete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.css"]
})
export class AutoCompleteComponent implements OnInit {
  searchTerm;
  data = [];
  item;
  parent:AutoCompletePopupDirective;
  constructor() { }
  
  ngOnInit() {
  }

  selected = val => {
    this.item = val;
    this.parent.itemSelected(val);
  };

  addNewItem = val => this.data.push(val);
}
