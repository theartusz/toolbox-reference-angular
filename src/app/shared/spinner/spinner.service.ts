import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SpinnerService {
  counter = 0;
  private _httpRequestInProgress = new BehaviorSubject<number>(0);
  requestInProgress$ = this._httpRequestInProgress.asObservable();

  startRequest(): void {
    this.counter++;
    this.setRequestNumber(this.counter);
  }

  endRequest(): void {
    this.counter--;
    this.setRequestNumber(this.counter);
  }

  private setRequestNumber(number) {
    this._httpRequestInProgress.next(number);
  }
}
