import { NgModule, HttpClientModule, RouterModule, CommonModule, HTTP_INTERCEPTORS } from 'vendor/angular';

// spinner
import { SpinnerDirective } from 'app/shared/spinner/spinner.directive';

// services
import { SpinnerService } from 'app/shared/spinner/spinner.service';
import { ValidatorService } from 'app/shared/utility/validation.service';
import { ExampleService } from 'app/shared/utility/example.service';
import { HttpInterceptorHandler } from './interceptor/HttpInterceptorHandler';



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
