/**
 * Created by lenewhiteley on 13/02/2018.
 */

import { NgModule, FormsModule, ReactiveFormsModule } from 'vendor/angular';

// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';
import { FormGroupRouterModule } from 'app/form-group/shared/form-group.route';

// component
import { FormGroupComponent } from 'app/form-group/form-group.component';




@NgModule({
  imports: [
    TranslateModule,
    FormGroupRouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    FormGroupComponent
  ],
  providers: [],
})
export class FormGroupModule {


}
