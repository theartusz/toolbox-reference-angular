// modules
import { TranslateModule } from '@ngx-translate/core';
import { ErrorRouterModule } from 'app/error/shared/error.route';

// component
import { ErrorComponent } from 'app/error/error.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [TranslateModule, ErrorRouterModule],
  exports: [],
  declarations: [ErrorComponent],
  providers: [],
})
export class ErrorModule {
}
