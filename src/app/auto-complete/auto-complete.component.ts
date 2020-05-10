import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { AutoCompletePopupDirective } from "../auto-complete-popup.directive";
@Component({
  selector: "app-auto-complete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.css"]
})
export class AutoCompleteComponent implements OnInit {
  searchTerm;
  data = [];
  filterData=[];
  item;
  parent: AutoCompletePopupDirective;
  constructor() { }

  ngOnInit() {
    this.filterData = [...this.data];
   }

  selected = val => {
    this.item = val;
    this.parent.itemSelected(val);
  };

  addNewItem = val => {
    this.parent.itemSelected(val);
  }

  filterItems = items => {
    this.filterData = [...items];
  };
}
