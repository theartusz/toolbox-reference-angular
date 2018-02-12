/**
 * created by lenewhiteley on 12/02/2018.
 */
import {Component, OnInit} from '@angular/core';
import {enableProdMode} from '@angular/core';


@Component({
  selector: 'boilerplate-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    enableProdMode();
  }
}


