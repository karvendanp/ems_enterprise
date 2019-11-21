import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmn-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input('title-text') title: string;

  constructor() { }

  ngOnInit() {

  }

}
