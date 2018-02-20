import {NgModule} from '@angular/core';
import {ExampleService} from '../example.service';
import {ValidatorService} from '../validation.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ExampleService,
    ValidatorService
  ],
})
export class ServiceModule {
}
