/**
 * Created by orjanertkjern on 21/08/2017.
 */
import {Component, OnInit} from '@angular/core';
import {ExampleService} from '../../services/example.service';

@Component({
  selector: 'boilerplate-greeter',
  templateUrl: 'greeter.component.html',
  styleUrls: ['greeter.component.scss']
})
export class GreeterComponent implements OnInit {

  exampleServiceWorks: boolean;
  name: string;
  greeting: string;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
    this.exampleServiceWorks = this.exampleService.serviceExampleFunction();
  }

  scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  sayHello() {
    this.greeting = 'Hello ' + this.name + '!';
  }
}
