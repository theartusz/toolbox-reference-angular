import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ExampleService {

  constructor() {
  }

  serviceExampleFunction(): Observable<boolean> {
    return Observable.of(true);
  }
}
