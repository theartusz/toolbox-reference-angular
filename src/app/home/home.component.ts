import { Component, OnInit } from 'vendor/angular';

@Component({
  selector: 'boilerplate-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./shared/home.component.scss']
})
export class HomeComponent implements OnInit {
  today: Date;

  constructor() {
  }

  ngOnInit() {
    this.today = new Date();
  }
}
