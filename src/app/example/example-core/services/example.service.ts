import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catNames } from '../../example-shared/models';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor() {}

  public serviceExampleFunction(): Observable<boolean> {
    return of(false);
  }

  public getRandomCatName(): Observable<string> {
    const numberOfCatNames = catNames.length;
    const randomCatName = catNames[Math.floor(Math.random() * numberOfCatNames)];

    return of(randomCatName);
  }
}
