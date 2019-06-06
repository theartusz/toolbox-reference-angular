// spinner
import { SpinnerDirective } from 'app/shared/spinner/spinner.directive';

// services
import { SpinnerService } from 'app/shared/spinner/spinner.service';
import { ValidatorService } from 'app/shared/utility/validation.service';
import { ExampleService } from 'app/shared/utility/example.service';
import { HttpInterceptorHandler } from './interceptor/HttpInterceptorHandler';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SpinnerDirective,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    SpinnerDirective,
  ],
  providers: [
    SpinnerService,
    ExampleService,
    ValidatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorHandler,
      multi: true,
    },
  ],
})

export class SharedModule {
}
