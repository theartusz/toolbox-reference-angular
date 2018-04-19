import { NgModule, HttpClientModule, RouterModule, CommonModule, HTTP_INTERCEPTORS } from 'vendor/angular';
import { MomentModule } from 'angular2-moment';

// spinner
import { SpinnerDirective } from 'app/shared/spinner/spinner.directive';

// pipes
import { DatexPipe } from 'app/shared/pipes/datex.pipe';

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
    MomentModule
  ],
  declarations: [
    DatexPipe,
    SpinnerDirective
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    DatexPipe,
    SpinnerDirective
  ],
  providers: [
    SpinnerService,
    ExampleService,
    ValidatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorHandler,
      multi: true,
    }
  ]
})

export class SharedModule {
}
