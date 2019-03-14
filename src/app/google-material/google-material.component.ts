import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'boilerplate-google-material',
  templateUrl: './google-material.component.html',
  styleUrls: ['./google-material.component.scss'],

})
export class GoogleMaterialComponent {
  events: string[] = [];
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(-30);
    this.maxDate.setDate(this.maxDate.getDate() + 30);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}


