import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: '<app-header></app-header><div id="wrapper"><app-sidebar></app-sidebar><router-outlet></router-outlet></div><app-footer></app-footer>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
