/**
 * Created by orjanertkjern on 21/08/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ExampleService} from '../../services/example.service';

@Component({
  selector: 'boilerplate-greeter',
  templateUrl: 'greeter.component.html',
  styleUrls: ['greeter.component.scss']
})
export class GreeterComponent implements OnInit {

  @Input() greetings: string;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
    if (!this.greetings)
      this.greetings = 'home.welcome';
  }


}
