import {NgModule} from '@angular/core';
import {ErrorComponent} from './error.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [TranslateModule.forRoot()],
  exports: [],
  declarations: [ErrorComponent],
  providers: [],
})
export class ErrorModule {
}
