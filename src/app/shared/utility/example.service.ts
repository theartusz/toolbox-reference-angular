
import {of as observableOf} from 'rxjs';
import { Injectable } from 'vendor/angular';
import { Observable } from 'vendor/rxJs';


@Injectable()
export class ExampleService {

  constructor() {
  }

  serviceExampleFunction(): Observable<boolean> {
    return observableOf(true);
  }
}
