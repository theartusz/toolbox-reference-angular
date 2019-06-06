import { ExampleService } from 'app/shared/utility/example.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'boilerplate-greeter',
  templateUrl: 'greeter.component.html',
  styleUrls: ['./shared/greeter.component.scss'],
})
export class GreeterComponent implements OnInit {

  @Input() greetings: string;
  isServiceWorking: boolean;
  showServiceStatus: boolean;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
    if (!this.greetings) {
      this.greetings = 'home.welcome';
    }
    this.callService();
  }

  toggleServiceStatus() {
    this.showServiceStatus = !this.showServiceStatus;
  }

  private callService() {
    this.exampleService.serviceExampleFunction().subscribe(
      result => {
        this.isServiceWorking = result;
      },
      err => {
        console.log(err);
      });
  }

}
