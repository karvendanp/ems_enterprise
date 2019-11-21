import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('title-text') title: string;

  constructor() { }

  ngOnInit() {
  }

}
