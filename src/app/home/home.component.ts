import {Component, HostListener, Inject, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'boilerplate-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  today: Date;

  constructor() {
  }

  ngOnInit() {
    this.today = new Date();
  }

  ngAfterViewInit() {

  }
}
