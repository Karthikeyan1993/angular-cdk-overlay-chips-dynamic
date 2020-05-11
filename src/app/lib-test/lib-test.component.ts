import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib-test',
  templateUrl: './lib-test.component.html',
  styleUrls: ['./lib-test.component.css']
})
export class LibTestComponent implements OnInit {
   numbers = [{name: 'One'}, {name: 'Two'}, {name: 'Three'}];
  constructor() { }

  ngOnInit() {
  }

}