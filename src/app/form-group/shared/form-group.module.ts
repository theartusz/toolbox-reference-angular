// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';
import { FormGroupRouterModule } from 'app/form-group/shared/form-group.route';

// component
import { FormGroupComponent } from 'app/form-group/form-group.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  imports: [
    TranslateModule,
    FormGroupRouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [
    FormGroupComponent,
  ],
  providers: [],
})
export class FormGroupModule {


}
