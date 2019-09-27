import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class ExampleService {

  constructor() {
  }

  serviceExampleFunction(): Observable<boolean> {
    return of(false);
  }
}
