import { Injectable } from 'vendor/angular';
import { Observable } from 'vendor/rxJs';
import 'rxjs/add/observable/of';

@Injectable()
export class ExampleService {

  constructor() {
  }

  serviceExampleFunction(): Observable<boolean> {
    return Observable.of(true);
  }
}
