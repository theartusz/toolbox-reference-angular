// Services
import { SpinnerService } from 'app/shared/spinner/spinner.service';
import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[boilerplateSpinner]',
})
export class SpinnerDirective implements OnInit, OnDestroy {

  subscription: Subscription;
  private spinnerElement;

  constructor(elementRef: ElementRef, private spinner: SpinnerService) {
    this.spinnerElement = elementRef.nativeElement;
  }

  ngOnInit() {
    this.subscription = this.spinner.requestInProgress$
      .subscribe(item => {
        if (item <= 0) {
          this.spinnerElement.style.display = 'none';
        } else {
          this.spinnerElement.style.display = 'block';
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
