/**
 * created by lenewhiteley on 12/02/2018.
 */

import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'boilerplate-google-material',
  templateUrl: './google-material.component.html',
  styleUrls: ['./google-material.component.scss'],

})
export class GoogleMaterialComponent  {
  events: string[] = [];
  minDate = new Date(moment().subtract(30, 'days').calendar());
  maxDate = new Date(moment().add(30, 'days').calendar());

  constructor() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}


