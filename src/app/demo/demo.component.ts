import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  data: any[] = [];
  flag = false;
  chips = [];
  constructor() { }

  ngOnInit() {
    this.getData();
  }

  getData = (param?): void => {
    this.data.push("Java");
    this.data.push("C#");
    this.data.push("Python");
    this.data.push("Angular");
    this.data.push("Javascript");
    this.data.push("JQuery");
    this.data.push("CSS");
    this.data.push("HTML5");
  };

  selectedItem = val => {
    this.chips.push(val);
    this.removeItems(this.data, val);
  };

  closeItem = val => {
    this.data.push(val);
    this.removeItems(this.chips, val);
  };

  removeItems(arr: string[], val: string) {
    const index = arr.indexOf(val);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
}
