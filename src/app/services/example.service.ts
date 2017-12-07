import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ExampleService {

  constructor() {
  }

  serviceExampleFunction(): Observable<boolean> {
    return Observable.of(true);
  }
}
